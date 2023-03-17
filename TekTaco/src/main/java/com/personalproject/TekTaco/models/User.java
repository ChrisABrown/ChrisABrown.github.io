package com.personalproject.TekTaco.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.ArrayList;

@Document(collection = "Users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    private String _id;
    private String firstName;
    private String lastName;
    private String userName;
    private String email;
    @DocumentReference
    private ArrayList<Order> orders;

    public void setUsername() {
        this.userName = this.firstName.charAt(0) + this.lastName;
    }


}
