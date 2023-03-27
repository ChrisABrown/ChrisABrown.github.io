package com.personalproject.TekTaco.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDate;
import java.util.Set;

@Document(collection = "Orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    @Id
    private String orderId;

    @CreatedBy
    private String username;
    private Set<CartItem> orderedItems;
    //name, qty, image, price
    private Object deliveryAddress;
    //address, city, state, zipcode
    private String paymentMethod;
    private Object paymentResult;
    private int taxPrice;
    private Integer deliveryCharge;
    private Integer totalPrice;
    private Boolean isPaid;
    @CreatedDate
    private LocalDate paidOn;



}
