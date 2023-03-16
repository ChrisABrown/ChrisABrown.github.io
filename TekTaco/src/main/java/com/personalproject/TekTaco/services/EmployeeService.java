package com.personalproject.TekTaco.services;

import com.personalproject.TekTaco.models.Employee;
import com.personalproject.TekTaco.repositories.EmployeeRepository;
import org.bson.types.ObjectId;
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

    public Employee getEmployeeById(ObjectId id) {
        return employeeRepo.findEmployeeById((id));
    }


    public List<Employee> createNewEmployees(Set<Employee> newEmployees) {
        List<Employee> employeeList = newEmployees.stream().toList();
        return employeeRepo.saveAll(employeeList);
    }

    public Set<Employee> getAdminEmployees(Boolean isAdmin) {
        Set<Employee> adminEmployees = employeeRepo.findAdminEmployees(isAdmin);
        for (Employee adminEmployee : adminEmployees) {
            Boolean admin = adminEmployee.getIsAdmin();
            if (admin) {
                return employeeRepo.findAdminEmployees(true);
            }
            return null;
        }
        return adminEmployees;
    }


    public void deleteEmployee(ObjectId id) {
        id = getEmployeeById(id).getEmployeeId();
        try {
            employeeRepo.deleteById(id);
        } catch (EmptyResultDataAccessException exception) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No Employee found for the id " + id);
        }
    }

    public Optional<Employee> updateEmployeeInfo(ObjectId id, Employee employeeInfo) {
        Optional<Employee> employee = employeeRepo.findById(id);
        if (employee.isPresent()) {
            Employee newHire = employee.get();
            newHire.setEmployeeId(employeeInfo.getEmployeeId());
            newHire.setName(employeeInfo.getName());
            newHire.setEmail(employeeInfo.getEmail());
            newHire.setPassword(employeeInfo.getPassword());
            newHire.setIsAdmin(employeeInfo.getIsAdmin());
            return Optional.of(employeeRepo.save(newHire));
        }
        return employee;
    }

}
