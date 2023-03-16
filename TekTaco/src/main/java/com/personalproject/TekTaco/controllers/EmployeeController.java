package com.personalproject.TekTaco.controllers;

import com.personalproject.TekTaco.models.AppResponse;
import com.personalproject.TekTaco.models.Employee;
import com.personalproject.TekTaco.services.EmployeeService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/staff-list/{employeeId}")
    public ResponseEntity<Object> getEmployee(@RequestParam @PathVariable ObjectId employeeId) {
        List<Employee> employeeList = employeeService.getAllEmployees();
        Employee employee = employeeService.getEmployeeById(employeeId);
        if (!employeeList.contains(employee)) {
            employeeList.add(employee);
            return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "Found employee with id " + employeeId, true, employeeList), HttpStatus.FOUND);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), employee + "No data found", false, null), HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/staff-list/")
    public ResponseEntity<Object> getEmployeesByAccessLevel(@RequestParam Boolean isAdmin) {
        Set<Employee> adminEmployees = employeeService.getAdminEmployees(true);
        Set<Employee> userEmployees = employeeService.getAdminEmployees(false);
        if (isAdmin) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "Set of all employees with admin access: ", true, adminEmployees), HttpStatus.FOUND);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "Set of all employees with user access: ", true, userEmployees), HttpStatus.FOUND);
        }

    }


    @PostMapping
    public List<Employee> createNewEmployees(@Validated @RequestBody Set<Employee> newHires) {
        return employeeService.createNewEmployees(newHires);
    }

    @PutMapping("/{id}")
    public Optional<Employee> updateEmployeeInfo(@PathVariable ObjectId id, @RequestBody Employee employeeInfo) {
        return employeeService.updateEmployeeInfo(id, employeeInfo);
    }

    @DeleteMapping("/{employeeId}")
    public void deleteEmployeeById(@PathVariable ObjectId employeeId) {
        employeeService.deleteEmployee(employeeId);
    }


}
