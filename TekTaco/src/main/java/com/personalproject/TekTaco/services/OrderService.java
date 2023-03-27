package com.personalproject.TekTaco.services;


import com.personalproject.TekTaco.models.MenuItem;
import com.personalproject.TekTaco.models.Order;
import com.personalproject.TekTaco.models.User;
import com.personalproject.TekTaco.repositories.OrderRepository;
import com.personalproject.TekTaco.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Service
public class OrderService {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    private MongoTemplate mongoTemplate;


    public Order createOrder(String username, Collection<Object> orderDetails) {
        Set<MenuItem> orderedItems = null;
        Object deliveryAddress = null;
        String paymentMethod = "";
        Object paymentResult = null;
        int taxPrice = 0;
        Integer deliveryCharge = null;
        Integer totalPrice = null;
        Boolean isPaid = false;
        LocalDate paidOn = null;


        orderDetails.add(orderedItems);
        orderDetails.add(deliveryAddress);
        orderDetails.add(paymentMethod);
        orderDetails.add(paymentResult);
        orderDetails.add(taxPrice);
        orderDetails.add(deliveryCharge);
        orderDetails.add(totalPrice);
        orderDetails.add(isPaid);
        orderDetails.add(paidOn);


        Order newOrder = orderRepository.insert(new Order(userRepository.findWithUserName(username), orderDetails);
        mongoTemplate.update(User.class).matching(Criteria.where("username").is(username)).apply(new Update().push("orderList").value(newOrder)).first();


        return newOrder;
    }
}