package com.personalproject.TekTaco.controllers;

import com.personalproject.TekTaco.models.AppResponse;
import com.personalproject.TekTaco.models.Employee;
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
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<Object> getAllEmployees() {
        List<Employee> allEmployees = employeeService.getAllEmployees();
        return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "List of all employees: ", true, allEmployees), HttpStatus.FOUND);
    }

    @GetMapping("/staff-list/{employeeId}")
    public ResponseEntity<Object> getEmployee(@RequestParam @PathVariable String employeeId) {
        List<Employee> employeeList = employeeService.getAllEmployees();
        Employee employee = employeeService.getEmployeeById(employeeId);
        if (!employeeList.contains(employee)) {
            employeeList.add(employee);
            return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "Found employee with id " + employeeId, true, employeeList), HttpStatus.FOUND);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), employee + "No data found", false, null), HttpStatus.NOT_FOUND);
    }

    @GetMapping("/staff{isAdmin}")
    public ResponseEntity<Object> getEmployeesByAccessLevel(@PathVariable @RequestParam boolean isAdmin) {
        List<Employee> adminEmployees = employeeService.getAdminEmployees();
        List<Employee> allEmployees = employeeService.getAllEmployees();
        List<Employee> userEmployees = new ArrayList<>();
        for (Employee users : allEmployees) {
            if (!users.getIsAdmin()) {
                userEmployees.add(users);
            }
        }
        if (isAdmin) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "Set of all employees with admin access: ", true, adminEmployees), HttpStatus.FOUND);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "Set of all employees with user access: ", true, userEmployees), HttpStatus.FOUND);
    }


    @PostMapping("/add-new-employees")
    public ResponseEntity<Object> createNewEmployees(@Validated @RequestBody Set<Employee> newHires) {
        List<Employee> newEmployees = employeeService.createNewEmployees(newHires);
        return new ResponseEntity<>(new AppResponse(HttpStatus.CREATED.value(), "New hires: ", true, newEmployees), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateEmployeeInfo(@PathVariable String id, @RequestBody Employee updatedEmployee) {
        if (Objects.equals(updatedEmployee.getEmployeeId(), id)) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found", false, null), HttpStatus.NOT_FOUND);
        }
        employeeService.updateEmployeeInfo(id, updatedEmployee);
        return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "Update Employee info with id: " + id, true, updatedEmployee), HttpStatus.FOUND);
    }

    @DeleteMapping("/{employeeId}")
    public ResponseEntity<Object> delete(@PathVariable String employeeId) {
        Optional<Employee> employee = Optional.ofNullable(employeeService.getEmployeeById(employeeId));
        if (employee.isPresent()) {
            employeeService.deleteEmployee(employee.get().getEmployeeId());
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "Deleted Employee with id: " + employee.get().getEmployeeId(), true, null), HttpStatus.OK);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found", false, null), HttpStatus.NOT_FOUND);
    }


}
