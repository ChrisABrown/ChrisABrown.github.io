package com.personalproject.TekTaco.services;

import com.personalproject.TekTaco.models.Employee;
import com.personalproject.TekTaco.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepo;

    public List<Employee> getAllEmployees() {
        return employeeRepo.findAll();
    }

    public Employee getEmployeeById(String id) {
        return employeeRepo.findEmployeeById((id));
    }


    public List<Employee> createNewEmployees(Set<Employee> newEmployees) {
        List<Employee> employeeList = newEmployees.stream().toList();
        employeeList.forEach(employee -> {
            employee.setIsAdmin(employee.getIsAdmin());
        });
        return employeeRepo.saveAll(employeeList);
    }

    public List<Employee> getAdminEmployees() {
        return employeeRepo.findAdminEmployees();
    }


    public void deleteEmployee(String id) {
        id = getEmployeeById(id).getEmployeeId();
        try {
            employeeRepo.deleteById(id);
        } catch (EmptyResultDataAccessException exception) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No Employee found for the id " + id);
        }
    }

    public void updateEmployeeInfo(String id, Employee employeeInfo) {
        Employee newEmployee = new Employee();
        Optional<Employee> employee = employeeRepo.findById(id);
        if (employee.isPresent()) {
            newEmployee = employee.get();
            newEmployee.setName(employeeInfo.getName());
            newEmployee.setEmail(employeeInfo.getEmail());
            newEmployee.setPassword(employeeInfo.getPassword());
            newEmployee.setIsAdmin(employeeInfo.getIsAdmin());
            employeeRepo.save(newEmployee);
        }
    }

}
