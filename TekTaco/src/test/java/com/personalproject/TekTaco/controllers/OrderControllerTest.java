package com.personalproject.TekTaco.controllers;

import com.personalproject.TekTaco.models.Order;
import com.personalproject.TekTaco.repositories.OrderRepository;
import com.personalproject.TekTaco.services.OrderService;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class OrderControllerTest {
    @InjectMocks
    private OrderService orderService;

    @Mock
    OrderRepository orderRepository;

    @Mock
    Order orderMock;

    @BeforeAll
    static void setup(){

    }



    @Test
    void createOrder() {
        when(this.orderService.createOrder(orderMock))
                .thenReturn(new Order());

    }
}