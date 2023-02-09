package com.personalproject.TekTaco.models;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Document(collection = "Employee")
public class Employee {
    @Id
    private Integer employeeId;
    private String name;
    private String password;
    private String ACCESS_LEVEL;
    private String email;

    public Employee() {
    }

    public Employee(int employeeId, String name, String password, String ACCESS_LEVEL, String email) {
        this.employeeId = employeeId;
        this.name = name;
        this.password = password;
        this.ACCESS_LEVEL = ACCESS_LEVEL;
        this.email = email;
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

    public String getACCESS_LEVEL() {
        return ACCESS_LEVEL;
    }

    public void setACCESS_LEVEL(String ACCESS_LEVEL) {
        this.ACCESS_LEVEL = ACCESS_LEVEL;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
