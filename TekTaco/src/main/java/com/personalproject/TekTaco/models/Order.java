package com.personalproject.TekTaco.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;


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
    private Integer shippingPrice;
    private Integer totalPrice;
    private Boolean isPaid;
    private Date paidOn;
    private Boolean isDelivered;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<MenuItem> getOrderedItems() {
        return orderedItems;
    }

    public void setOrderedItems(Set<MenuItem> orderedItems) {
        this.orderedItems = orderedItems;
    }

    public Object getShippingAddress() {
        return shippingAddress;
    }

    public void setShippingAddress(Object shippingAddress) {
        this.shippingAddress = shippingAddress;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public Object getPaymentResult() {
        return paymentResult;
    }

    public void setPaymentResult(Object paymentResult) {
        this.paymentResult = paymentResult;
    }

    public Integer getTaxPrice() {
        return taxPrice;
    }

    public void setTaxPrice(Integer taxPrice) {
        this.taxPrice = taxPrice;
    }

    public Integer getShippingPrice() {
        return shippingPrice;
    }

    public void setShippingPrice(Integer shippingPrice) {
        this.shippingPrice = shippingPrice;
    }

    public Integer getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Integer totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Boolean getPaid() {
        return isPaid;
    }

    public void setPaid(Boolean paid) {
        isPaid = paid;
    }

    public Date getPaidAt() {
        return paidAt;
    }

    public void setPaidAt(Date paidAt) {
        this.paidAt = paidAt;
    }

    public Boolean getDelivered() {
        return isDelivered;
    }

    public void setDelivered(Boolean delivered) {
        isDelivered = delivered;
    }
}
