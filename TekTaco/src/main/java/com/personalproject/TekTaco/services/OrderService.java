package com.personalproject.TekTaco.services;


import com.personalproject.TekTaco.models.Order;
import com.personalproject.TekTaco.models.User;
import com.personalproject.TekTaco.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepo;

    @Autowired
    private MongoTemplate mongoTemplate;


    public Order createOrder(Order newOrder) {

        Order createdOrder = orderRepo.insert(newOrder);
        String username = newOrder.getUser().getUsername();
        mongoTemplate.update(User.class).matching(Criteria.where("username").is(username)).apply(new Update().push("orderList").value(createdOrder)).first();

        return createdOrder;

    }
}