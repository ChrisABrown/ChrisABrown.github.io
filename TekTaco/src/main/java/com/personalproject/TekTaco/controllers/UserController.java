package com.personalproject.TekTaco.controllers;

import com.personalproject.TekTaco.models.AppResponse;
import com.personalproject.TekTaco.models.AuthRequest;
import com.personalproject.TekTaco.models.User;
import com.personalproject.TekTaco.services.JwtService;
import com.personalproject.TekTaco.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
@RequestMapping("/api/v1/admin")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authManager;


    @PostMapping("/auth-login")
    public ResponseEntity<Object> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authManager
                .authenticate
                        (new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            String token = jwtService.generateToken(authRequest.getUsername());
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(),
                    "Valid request",
                    true,
                    new String[] {userService.getUserDetails(authRequest.getUsername()), token}
            ), HttpStatus.OK);
        }
        throw new UsernameNotFoundException("Invalid user request!");
    }

    @GetMapping("/{userName}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<Object> getUser(@PathVariable String userName) {
        List<User> userList = userService.getAllUsers();
        Optional<User> user = userService.getUserByUserName(userName);
        if (user.isPresent() && userList.contains(user.get())) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "Found User with username: " + userName, true, user), HttpStatus.FOUND);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found ", false, user), HttpStatus.NOT_FOUND);
    }

    @GetMapping
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<Object> getAllUsers() {
        List<User> allUsers = userService.getAllUsers();
        return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "List of all Users: ", true, allUsers), HttpStatus.FOUND);
    }

    @PostMapping
    public ResponseEntity<Object> addNewUser(@RequestBody User user) {
        userService.addUser(user);
        return new ResponseEntity<>(new AppResponse(HttpStatus.CREATED.value(), "New user created", true, user), HttpStatus.CREATED);
    }

    @GetMapping("/{roles}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<Object> getUsersByRole(@PathVariable String roles) {
        List<User> userList = userService.getUsersByRoles(roles);

        for (User users : userList) {
            if (users.getRoles().equals(roles)) {
                return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "List of users with " + roles + " access: ", true, userList), HttpStatus.FOUND);
            }
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found", false, null), HttpStatus.NOT_FOUND);
    }


    @PutMapping("/{username}")
    public ResponseEntity<Object> updateUser(@PathVariable String username, @RequestBody User updatedUser) {
        Optional<User> userByUserName = userService.getUserByUserName(username);
        if (userByUserName.isPresent() && Objects.equals(userByUserName.get().getUserName(), username)) {
            userService.updateUser(username, updatedUser);
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "User with username: " + username + " updated", true, updatedUser), HttpStatus.OK);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found ", false, null), HttpStatus.NOT_FOUND);
    }


    @DeleteMapping("/{username}")
    public ResponseEntity<Object> delete(@PathVariable String username) {
        Optional<User> userOptional = userService.getUserByUserName(username);
        if (userOptional.isPresent()) {
            userService.deleteUser(userOptional.get().getUserId());
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "Deleted User with id: " + userOptional.get().getUserId(), true, userOptional), HttpStatus.OK);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found", false, null), HttpStatus.NOT_FOUND);
    }
}



