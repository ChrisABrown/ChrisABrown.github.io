package com.personalproject.TekTaco.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "Users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    private ObjectId userId;
    @Indexed(unique = true)
    private String userName;
    private String firstName;
    private String lastName;
    private String password;
    @Indexed(unique = true)
    private String email;
    private String roles;

    public void setUsername() {
        this.userName = this.firstName.charAt(0) + this.lastName;
    }


    @Override
    public String toString() {

        return "userId: " + userId +
                " userName: " + userName +
                " firstName: " + firstName +
                " lastName: " + lastName +
                " email: " + email +
                " roles: " + roles
                ;
    }
}
