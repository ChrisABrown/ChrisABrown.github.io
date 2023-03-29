package com.personalproject.TekTaco.services;


import com.personalproject.TekTaco.models.Order;
import com.personalproject.TekTaco.models.User;
import com.personalproject.TekTaco.repositories.OrderRepository;
import com.personalproject.TekTaco.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    private MongoTemplate mongoTemplate;


    public Order createOrder(Order newOrder) {


        Order createdOrder = orderRepository.insert(newOrder);
        mongoTemplate.update(User.class).matching(Criteria.where("username")
                        .is(newOrder.getUser().getUsername()))
                .apply(new Update().push("orderList").value(createdOrder)).first();


        return createdOrder;
    }
}