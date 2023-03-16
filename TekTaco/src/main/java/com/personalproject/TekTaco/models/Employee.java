package com.personalproject.TekTaco.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "Employees")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
    @Id
    private ObjectId employeeId;
    private String name;
    private String password;
    private Boolean isAdmin;
    private String email;

}
