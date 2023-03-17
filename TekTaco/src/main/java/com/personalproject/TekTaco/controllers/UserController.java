package com.personalproject.TekTaco.controllers;

import com.personalproject.TekTaco.models.AppResponse;
import com.personalproject.TekTaco.models.User;
import com.personalproject.TekTaco.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
@RequestMapping("/admin/users")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping
    public ResponseEntity<Object> getAllUsers() {
        List<User> allUsers = userService.getAllUsers();
        return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "List of Current Users: ", true, allUsers), HttpStatus.FOUND);
    }

    @GetMapping("/get{id}")
    public ResponseEntity<Object> getUserById(@PathVariable @RequestParam String id) {
        Optional<User> userOptional = userService.getUserById(id);
        List<User> allUsers = userService.getAllUsers();
        if (allUsers.contains(userOptional)) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No User found with the id: " + id, false, userOptional), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "Found the User with the id: " + id, true, userOptional), HttpStatus.FOUND);
    }

    @PostMapping("/add-new-user")
    public ResponseEntity<Object> createNewUsers(@RequestBody Set<User> newUsers) {
        List<User> allUsers = userService.createNewUsers(newUsers);
        return new ResponseEntity<>(new AppResponse(HttpStatus.CREATED.value(), "New Users: ", true, newUsers), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateUser(@PathVariable String id, @RequestBody User userInfo) {
        if (Objects.equals(userInfo.get_id(), id)) {
            userService.updateUser(id, userInfo);
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "User with id: " + id + " updated", true, userInfo), HttpStatus.OK);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found", false, null), HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
        Optional<User> isDeleted = userService.getUserById(id);
        if (isDeleted.isPresent()) {
            userService.delete(id);
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "User with id: " + id + " has been deleted", true, null), HttpStatus.OK);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found", false, null), HttpStatus.NOT_FOUND);
    }

}
