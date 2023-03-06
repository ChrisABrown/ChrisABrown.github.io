package com.personalproject.TekTaco.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Data
@Document(collection = "Users")
public class User {
    @Id
    private String _id;
    private String name;
    private Date dateJoined;
    private String email;
    private String password;

    public User() {
    }

    public User(String _id, String name, Date dateJoined, String email, String password) {
        this._id = _id;
        this.name = name;
        this.dateJoined = dateJoined;
        this.email = email;
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDateJoined() {
        return dateJoined;
    }

    public void setDateJoined(Date dateJoined) {
        this.dateJoined = dateJoined;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
