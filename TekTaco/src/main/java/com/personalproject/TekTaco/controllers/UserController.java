package com.personalproject.TekTaco.controllers;

import com.personalproject.TekTaco.models.User;
import com.personalproject.TekTaco.payload.AppResponse;
import com.personalproject.TekTaco.payload.AuthRequest;
import com.personalproject.TekTaco.security.UserInfo;
import com.personalproject.TekTaco.security.jwt.JwtService;
import com.personalproject.TekTaco.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

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


    @PostMapping("/login")
    public ResponseEntity<Object> authenticateUser(@Valid @RequestBody AuthRequest authRequest) {
        Authentication authentication = authManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserInfo userDetails = (UserInfo) authentication.getPrincipal();

        ResponseCookie jwtCookie = jwtService.generateJwtCookie(userDetails);
        if (authentication.isAuthenticated()) {
            return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString()).body(userService.getUserByUserName(userDetails.getUsername()));
        }
        return null;

    }

    @GetMapping("/user/{username}/profile")
    public ResponseEntity<Object> getUserDetails(@PathVariable String username) {
        List<User> userList = userService.getAllUsers();
        Optional<User> user = userService.getUserByUserName(username);
        if (user.isPresent() && userList.contains(user.get())) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "Found User with username: " + username, true, user), HttpStatus.OK);
        }
        return new ResponseEntity<>(  new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found ", false, user), HttpStatus.NOT_FOUND);
    }

    @GetMapping("/users")
    public ResponseEntity<Object> getAllUsers() {
        List<User> allUsers = userService.getAllUsers();
        return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "List of all Users: ", true, allUsers), HttpStatus.FOUND);
    }

    @PostMapping("/user")
    public ResponseEntity<Object> addNewUser(@RequestBody User user) {
        userService.addUser(user);
        return new ResponseEntity<>(new AppResponse(HttpStatus.CREATED.value(), "New user created", true, user), HttpStatus.CREATED);
    }

    @GetMapping("/users/{roles}")
    public ResponseEntity<Object> getUsersByRole(@PathVariable String roles) {
        List<User> userList = userService.getUsersByRoles(roles);

        for (User users : userList) {
            if (users.getRoles().equals(roles)) {
                return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "List of users with " + roles + " access: ", true, userList), HttpStatus.FOUND);
            }
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found", false, null), HttpStatus.NOT_FOUND);
    }


    @PutMapping("/user/{username}")
    public ResponseEntity<Object> updateUser(@Valid @PathVariable String username, @RequestBody User updatedUser) {
        Optional<User> userByUserName = userService.getUserByUserName(username);
        jwtService.getJwtFromCookies()
        Authentication authentication = authManager.authenticate(new UsernamePasswordAuthenticationToken(username))
        if (userByUserName.isPresent() && Objects.equals(userByUserName.get().getUsername(), username)) {
            userService.updateUser(username, updatedUser);
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "User with username: " + username + " updated", true, updatedUser), HttpStatus.OK);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found ", false, null), HttpStatus.NOT_FOUND);
    }


    @DeleteMapping("/user/{username}")
    public ResponseEntity<Object> delete(@PathVariable String username) {
        Optional<User> userOptional = userService.getUserByUserName(username);
        if (userOptional.isPresent()) {
            userService.deleteUser(userOptional.get().getUserId());
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "Deleted User with id: " + userOptional.get().getUserId(), true, userOptional), HttpStatus.OK);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found", false, null), HttpStatus.NOT_FOUND);
    }
}



