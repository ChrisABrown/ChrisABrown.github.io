package com.personalproject.TekTaco.models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
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
    @NotBlank
    @Size(max = 20)
    private String username;
    @NotBlank
    @Size(max = 20)
    private String firstName;
    @NotBlank
    @Size(max = 20)
    private String lastName;
    @NotBlank
    @Size(max = 120)
    private String password;
    @Indexed(unique = true)
    @NotBlank
    @Size(max = 20)
    @Email
    private String email;
    private String roles;
    @DocumentReference
    private List<Order> orderList;
    public User(String username) {
        this.username = username;
    }

    public void setUsername() {
        this.username = this.firstName.charAt(0) + this.lastName;
    }


}
