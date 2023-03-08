package com.personalproject.TekTaco.controllers;

import com.personalproject.TekTaco.models.AppResponse;
import com.personalproject.TekTaco.models.User;
import com.personalproject.TekTaco.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
@RequestMapping("/admin/users")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/get")
    public ResponseEntity<Object> getAllUsers() {
        List<User> allUsers = userService.getAllUsers();

        if (allUsers.size() == 0) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NO_CONTENT.value(), "No users found", false, null), HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "List of Current Users: ", true, allUsers), HttpStatus.FOUND);
        }

    }

    @PostMapping()
    public ResponseEntity<Object> createNewUser(){

    }

}
