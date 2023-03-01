package com.personalproject.TekTaco.services;

import com.personalproject.TekTaco.models.Employee;
import com.personalproject.TekTaco.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepo;


    public List<Employee> createNewEmployees(List<Employee> newEmployees) {
        return employeeRepo.saveAll(newEmployees);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepo.findAll();
    }

    public String findNumberOfEmployees() {
        long count = employeeRepo.count();
        return ("Number of current employees: " + count);
    }

    public List<Employee> getAccessLevelForEmployees(String accessLevel) {
        List<Employee> adminEmployees = employeeRepo.findAll(accessLevel);
        for (Employee admin : adminEmployees) {
            var levelOfAccess = admin.getAccessLevel();
            if (Objects.equals(levelOfAccess, accessLevel))
                System.out.println(admin.getName() + " has " + levelOfAccess + " level access. ");
        }
        return adminEmployees;
    }

    public Employee getEmployeeById(Integer id) {
        return employeeRepo.findEmployeeById(id);
    }

    public Employee getEmployeeAccessLevel(String accessLevel) {
        return employeeRepo.findEmployeeByAccessLevel(accessLevel);
    }

    public void deleteEmployee(Integer id) {
        id = getEmployeeById(id).getEmployeeId();
        try {
            employeeRepo.deleteById(String.valueOf(id));
        } catch (EmptyResultDataAccessException exception) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No Employee found for the id " + id);
        }
    }

    public Optional<Employee> updateEmployeeInfo(Integer id, Employee employeeInfo) {
        Optional<Employee> employee = Optional.ofNullable(employeeRepo.findEmployeeById(id));
        if (employee.isPresent()) {
            Employee newHire = employee.get();
            newHire.setEmployeeId(employeeInfo.getEmployeeId());
            newHire.setName(employeeInfo.getName());
            newHire.setEmail(employeeInfo.getEmail());
            newHire.setPassword(employeeInfo.getPassword());
            newHire.setAccessLevel(employeeInfo.getAccessLevel());
            return Optional.of(employeeRepo.save(newHire));
        }
        return employee;
    }

}
