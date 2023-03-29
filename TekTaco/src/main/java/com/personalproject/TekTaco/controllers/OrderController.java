package com.personalproject.TekTaco.controllers;

import com.personalproject.TekTaco.models.Order;

import com.personalproject.TekTaco.payload.AppResponse;
import com.personalproject.TekTaco.services.OrderService;
import com.personalproject.TekTaco.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT}, allowCredentials = "true")
@RequestMapping("api/v1/order")
public class OrderController {

    @Autowired
    OrderService orderService;

    @Autowired
    UserService userService;


    @PostMapping

    public ResponseEntity<Object> createOrder(@RequestBody Order orderDetails) {


        Order createdOrder = orderService.createOrder(orderDetails);
        return new ResponseEntity<>(new AppResponse(HttpStatus.CREATED.value(), "New Order created", true, createdOrder), HttpStatus.CREATED);


    }
//    @GetMapping("/{orderId}")
//    public ResponseEntity<Object> getOrder(@PathVariable String orderId) {
//
//        return new ResponseEntity<>(new AppResponse(HttpStatus.CREATED.value(), "New Order created", true, createdOrder), HttpStatus.CREATED);
//
//
//    }



}
