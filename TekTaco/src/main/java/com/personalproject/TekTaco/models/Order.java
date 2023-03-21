package com.personalproject.TekTaco.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.Set;

@Document(collection = "Orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
    public class Order {
    @Id
    private ObjectId orderId;
    @DocumentReference
    private User user;
    @DocumentReference
    private Set<MenuItem> orderedItems;
    //name, qty, image, price
    private Object shippingAddress;
    //address, city, state, zipcode
    private String paymentMethod;
    private Object paymentResult;
    private Integer taxPrice;
    private Integer deliveryCharge;
    private Integer totalPrice;
    private Boolean isPaid;
    private LocalDate paidOn;
    private Boolean isDelivered;


}
