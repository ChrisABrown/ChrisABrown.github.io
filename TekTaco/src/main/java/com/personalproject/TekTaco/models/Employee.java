package com.personalproject.TekTaco.models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.Id;

@Document(collection = "Employees")
public class Employee {
    @Id
    private Integer employeeId;
    private String name;
    private String password;
    private String accessLevel;
    private String email;

    public Employee() {
    }

    public Employee(int employeeId, String name, String password, String accessLevel, String email) {
        this.employeeId = employeeId;
        this.name = name;
        this.password = password;
        this.accessLevel = accessLevel;
        this.email = email;
    }

    @Override
    public String toString() {
        return String.format("Employee[employeeId='%s', name='%s', email='%s', accessLevel='%s']", employeeId, name, email, accessLevel);
    }

    public int getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAccessLevel() {
        return accessLevel;
    }

    public void setAccessLevel(String accessLevel) {
        this.accessLevel = accessLevel;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
