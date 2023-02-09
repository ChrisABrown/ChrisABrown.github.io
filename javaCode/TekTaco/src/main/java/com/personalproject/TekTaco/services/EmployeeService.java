package com.personalproject.TekTaco.services;

import com.personalproject.TekTaco.models.Employee;
import com.personalproject.TekTaco.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepo;

    public List<Employee> createNewEmployee(List<Employee> newEmployees){
        return employeeRepo.saveAll(newEmployees);
    }

    public List<Employee> getAllUserLevelEmployees(String ACCESS_LEVEL){
        List<Employee> adminEmployees = employeeRepo.findAll(ACCESS_LEVEL);
        adminEmployees.forEach(employee -> employee.getACCESS_LEVEL());
    }
}
