package com.personalproject.TekTaco.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "Users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
    @Id
    private String employeeId;
    private String userName;
    private String firstName;
    private String lastName;
    private String password;
    private Boolean isAdmin = false;
    private String email;

    public void setUsername() {
        this.userName = this.firstName.charAt(0) + this.lastName;
    }

}
