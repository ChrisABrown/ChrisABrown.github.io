package com.personalproject.TekTaco.controllers;

import com.personalproject.TekTaco.models.AppResponse;
import com.personalproject.TekTaco.models.User;
import com.personalproject.TekTaco.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
@RequestMapping("/api/v1/admin")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/staff-list/{userName}")
    public ResponseEntity<Object> getUser(@PathVariable String userName) {
        List<User> userList = userService.getAllUsers();
        Optional<User> user = userService.getUserByUserName(userName);
        if (user.isPresent() && userList.contains(user.get())) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "Found User with username: " + userName, true, user), HttpStatus.FOUND);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found ", false, user), HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public ResponseEntity<Object> getAllEmployees() {
        List<User> allUsers = userService.getAllUsers();
        return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "List of all employees: ", true, allUsers), HttpStatus.FOUND);
    }

    @PostMapping("/new-user")
    public ResponseEntity<Object> addNewUser(@RequestBody User user) {
        userService.addUser(user);
        return new ResponseEntity<>(new AppResponse(HttpStatus.CREATED.value(), "New user created", true, user), HttpStatus.CREATED);
    }

    @GetMapping("/staff-list/admin-list/{roles}")
    public ResponseEntity<Object> getUsersByRole(@PathVariable String roles) {
        List<User> allUsers = userService.getAllUsers();
        List<User> adminUsers = new ArrayList<>();
        List<User> userList = new ArrayList<>();

        for (User users : allUsers) {
            if (users.getRoles().contains("ROLE_USER") && users.getRoles().equals(roles)) {
                userList.add(users);
                return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "List of users with user access: ", true, userList), HttpStatus.FOUND);
            } else if (users.getRoles().contains("ROLE_ADMIN") && users.getRoles().equals(roles)) {
                adminUsers.add(users);
                return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "List of all users with admin access: ", true, adminUsers), HttpStatus.FOUND);
            }
            return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "Users found have no matching roles", false, users), HttpStatus.FOUND);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found", false, null), HttpStatus.NOT_FOUND);
    }


    @PutMapping("/update-user/{username}")
    public ResponseEntity<Object> updateUser(@PathVariable String username, @RequestBody User updatedUser) {
        Optional<User> userByUserName = userService.getUserByUserName(username);
        if (userByUserName.isPresent() && Objects.equals(userByUserName.get().getUserName(), username)) {
            userService.updateUser(username, updatedUser);
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "User with username: " + username + " updated", true, updatedUser), HttpStatus.OK);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found ", false, null), HttpStatus.NOT_FOUND);
    }


    @DeleteMapping("/delete-user/{username}")
    public ResponseEntity<Object> delete(@PathVariable String username) {
        Optional<User> userOptional = userService.getUserByUserName(username);
        if (userOptional.isPresent()) {
            userService.deleteUser(userOptional.get().getUserId());
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "Deleted User with id: " + userOptional.get().getUserId(), true, userOptional), HttpStatus.OK);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found", false, null), HttpStatus.NOT_FOUND);
    }
}



