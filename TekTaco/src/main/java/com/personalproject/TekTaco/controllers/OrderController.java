package com.personalproject.TekTaco.controllers;

import com.personalproject.TekTaco.models.Order;
import com.personalproject.TekTaco.payload.AppResponse;
import com.personalproject.TekTaco.security.jwt.JwtService;
import com.personalproject.TekTaco.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT}, allowCredentials = "true")
@RequestMapping("api/v1/order")
public class OrderController {

    @Autowired
    OrderService orderService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authManager;

    @PostMapping
    public ResponseEntity<Object> createOrder(@RequestBody Order orderDetails, @) {
        if (jwtService.validateJwtToken(jwt)) {
            Order createdOrder = orderService.createOrder(orderDetails);
            return new ResponseEntity<>(new AppResponse(HttpStatus.CREATED.value(), "New Order created", true, createdOrder), HttpStatus.CREATED);
        }
        throw new UsernameNotFoundException("unable to authorize");
    }


}
