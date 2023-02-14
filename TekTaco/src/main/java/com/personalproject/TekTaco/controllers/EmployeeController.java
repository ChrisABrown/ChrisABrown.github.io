package com.personalproject.TekTaco.controllers;

import com.personalproject.TekTaco.models.Employee;
import com.personalproject.TekTaco.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("/http://localhost:3000")
@RequestMapping("api/admin")
public class EmployeeController {

    final
    EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/staff-list")
    @CrossOrigin
    public List<Employee> getAllEmployees() {
        var count = employeeService.findNumberOfEmployees();
        System.out.println(count);
        return employeeService.getAllEmployees();
    }

    @GetMapping("/staff-list/{accessLevel}")
    public List<Employee> getEmployeesByAccessLevel(@PathVariable String accessLevel) {
        return employeeService.getAccessLevelForEmployees(accessLevel);
    }

    @GetMapping("/staff-list/{employeeId}")
    public Employee getEmployeeById(@PathVariable Integer employeeId) {
        return employeeService.getEmployeeById(employeeId);
    }

    @GetMapping("/staff-list/{accessLevel}/{employeeId}")
    public Employee getEmployeeAccessLevel(@RequestParam Integer employeeId) {
        Employee employee = employeeService.getEmployeeById(employeeId);
        String accessLevel = employee.getAccessLevel();
        return employeeService.getEmployeeAccessLevel(accessLevel);
    }

    @PostMapping("/")
    public List<Employee> createNewEmployees(@Validated @RequestBody List<Employee> newHires) {
        return employeeService.createNewEmployees(newHires);
    }

    @PutMapping("/{id}")
    public Optional<Employee> updateEmployeeInfo(@PathVariable Integer id, @RequestBody Employee employeeInfo) {
        return employeeService.updateEmployeeInfo(id, employeeInfo);
    }

    @DeleteMapping("/{id}")
    public void deleteEmployeeById(@PathVariable Integer employeeId) {
        employeeService.deleteEmployee(employeeId);
    }


}
