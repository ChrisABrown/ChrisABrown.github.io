package com.personalproject.TekTaco.services;

import com.personalproject.TekTaco.models.User;
import com.personalproject.TekTaco.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepository employeeRepo;

    public List<User> getAllEmployees() {
        return employeeRepo.findAll();
    }

    public User getEmployeeById(String id) {
        return employeeRepo.findEmployeeById((id));
    }


    public List<User> createNewEmployees(Set<User> newUsers) {
        List<User> userList = newUsers.stream().toList();
        userList.forEach(user -> {
            user.setIsAdmin(user.getIsAdmin());
        });
        return employeeRepo.saveAll(userList);
    }

    public List<User> getAdminEmployees() {
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

    public void updateEmployeeInfo(String id, User userInfo) {
        User newUser = new User();
        Optional<User> employee = employeeRepo.findById(id);
        if (employee.isPresent()) {
            newUser = employee.get();
            newUser.setName(userInfo.getName());
            newUser.setEmail(userInfo.getEmail());
            newUser.setPassword(userInfo.getPassword());
            newUser.setIsAdmin(userInfo.getIsAdmin());
            employeeRepo.save(newUser);
        }
    }

}
