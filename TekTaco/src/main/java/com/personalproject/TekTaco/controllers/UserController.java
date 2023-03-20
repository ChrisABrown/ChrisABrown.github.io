package com.personalproject.TekTaco.controllers;

import com.personalproject.TekTaco.models.AppResponse;
import com.personalproject.TekTaco.models.User;
import com.personalproject.TekTaco.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.POST, RequestMethod.PUT})
@RequestMapping("/admin")
public class UserController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<Object> getAllEmployees() {
        List<User> allUsers = employeeService.getAllEmployees();
        return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "List of all employees: ", true, allUsers), HttpStatus.FOUND);
    }

    @GetMapping("/staff-list/{employeeId}")
    public ResponseEntity<Object> getEmployee(@RequestParam @PathVariable String employeeId) {
        List<User> userList = employeeService.getAllEmployees();
        User user = employeeService.getEmployeeById(employeeId);
        if (!userList.contains(user)) {
            userList.add(user);
            return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "Found employee with id " + employeeId, true, userList), HttpStatus.FOUND);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), user + "No data found", false, null), HttpStatus.NOT_FOUND);
    }

    @GetMapping("/staff{isAdmin}")
    public ResponseEntity<Object> getEmployeesByAccessLevel(@PathVariable @RequestParam boolean isAdmin) {
        List<User> adminUsers = employeeService.getAdminEmployees();
        List<User> allUsers = employeeService.getAllEmployees();
        List<User> userUsers = new ArrayList<>();
        for (User users : allUsers) {
            if (!users.getIsAdmin()) {
                userUsers.add(users);
            }
        }
        if (isAdmin) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "Set of all employees with admin access: ", true, adminUsers), HttpStatus.FOUND);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "Set of all employees with user access: ", true, userUsers), HttpStatus.FOUND);
    }


    @PostMapping("/add-new-employees")
    public ResponseEntity<Object> createNewEmployees(@Validated @RequestBody Set<User> newHires) {
        List<User> newUsers = employeeService.createNewEmployees(newHires);
        return new ResponseEntity<>(new AppResponse(HttpStatus.CREATED.value(), "New hires: ", true, newUsers), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateEmployeeInfo(@PathVariable String id, @RequestBody User updatedUser) {
        if (Objects.equals(updatedUser.getEmployeeId(), id)) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found", false, null), HttpStatus.NOT_FOUND);
        }
        employeeService.updateEmployeeInfo(id, updatedUser);
        return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "Update Employee info with id: " + id, true, updatedUser), HttpStatus.FOUND);
    }

    @DeleteMapping("/{employeeId}")
    public ResponseEntity<Object> delete(@PathVariable String employeeId) {
        Optional<User> employee = Optional.ofNullable(employeeService.getEmployeeById(employeeId));
        if (employee.isPresent()) {
            employeeService.deleteEmployee(employee.get().getEmployeeId());
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "Deleted Employee with id: " + employee.get().getEmployeeId(), true, null), HttpStatus.OK);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found", false, null), HttpStatus.NOT_FOUND);
    }


}
