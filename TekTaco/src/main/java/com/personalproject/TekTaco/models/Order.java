package com.personalproject.TekTaco.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.time.LocalDate;
import java.util.Set;

@Document(collection = "Orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    @MongoId(FieldType.OBJECT_ID)
    private String orderId;
    @CreatedBy
    @DocumentReference(lookup = "{'username' : ?#{user} }", collection = "Users")
    private User user;
    private Set<CartItem> orderedItems;
    //name, qty, image, price
    private Object deliveryAddress;
    //address, city, state, zipcode
    private String paymentMethod;
    private Object paymentResult;
    private double taxPrice;
    private double deliveryCharge;
    private int totalPrice;
    private Boolean isPaid;
    private LocalDate paidOn;


}
