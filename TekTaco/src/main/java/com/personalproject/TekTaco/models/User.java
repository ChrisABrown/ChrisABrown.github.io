package com.personalproject.TekTaco.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.ReadOnlyProperty;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.ArrayList;
import java.util.List;


@Document(collection = "Users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    private ObjectId userId;

    private String username;

    private String firstName;

    private String lastName;

    private String password;

    private String email;
    private String roles;

    @ReadOnlyProperty
    @DocumentReference(lazy = true, lookup = "{'username' :?#{#self._username} }")
    private List<Order> orderList;

    public User(String username) {
        this.username = username;
    }

    public void setUsername() {
        this.username = this.firstName.charAt(0) + this.lastName;
    }
}
