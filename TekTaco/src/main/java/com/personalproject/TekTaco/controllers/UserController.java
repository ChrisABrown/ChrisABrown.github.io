package com.personalproject.TekTaco.controllers;

import com.personalproject.TekTaco.models.AppResponse;
import com.personalproject.TekTaco.models.User;
import com.personalproject.TekTaco.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
@RequestMapping("/admin/users")
public class UserController {

    @Autowired
    UserService userService;
    private final Set<User> allUsers = userService.getAllUsers();

    @GetMapping("/get")
    public ResponseEntity<Object> getAllUsers() {
        if (allUsers.size() == 0) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NO_CONTENT.value(), "No users found", false, null), HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "List of Current Users: ", true, allUsers), HttpStatus.FOUND);

    }

    @GetMapping("/get{id}")
    public ResponseEntity<Object> getUserById(@PathVariable String id) {
        Optional<User> user = userService.getUserById(id);
        Set<User> foundUser = allUsers.stream().filter(user2 -> Objects.equals(user2.get_id(), id)).collect(Collectors.toSet());
        if (foundUser.contains(user)) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "Found the User with the id: " + id, true, user), HttpStatus.FOUND);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No User found with the id: " + id, false, null), HttpStatus.NOT_FOUND);
    }

    @PostMapping("/")
    public ResponseEntity<Object> createNewUser(@RequestBody User newUser) {
        if (allUsers.contains(newUser)) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "Found User with id: " + newUser.get_id() + " already exists", true, newUser), HttpStatus.FOUND);
        } else if (allUsers.size() < 1) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.CREATED.value(), "Created User with id: " + newUser.get_id(), true, newUser), HttpStatus.CREATED);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteUserById(@PathVariable @RequestParam String id){
        Optional<User> optionalUser = userService.getUserById(id);
        optionalUser.ifPresent(user -> userService.deleteUser(user.get_id()));
        return new ResponseEntity<>(new AppResponse(HttpStatus.NO_CONTENT.value(), "User with id: " + id + " has been deleted", true, null), HttpStatus.NO_CONTENT);

    }

}
