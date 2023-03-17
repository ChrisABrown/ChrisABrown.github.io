package com.personalproject.TekTaco.services;

import com.personalproject.TekTaco.models.User;
import com.personalproject.TekTaco.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public Optional<User> getUserById(String id) {
        return userRepo.findById(id);
    }

    public List<User> createNewUsers(Set<User> newUsers) {
        List<User> users = newUsers.stream().toList();
        users.forEach(User::setUsername);
        return userRepo.saveAll(newUsers);
    }

    public void updateUser(String id, User userInfo) {
        User newUser = new User();
        Optional<User> userOptional = userRepo.findById(id);
        if (userOptional.isPresent()) {
            newUser = userOptional.get();
            newUser.setFirstName(userInfo.getFirstName());
            newUser.setLastName(userInfo.getLastName());
            newUser.setUsername();
            newUser.setEmail(userInfo.getEmail());
            userRepo.save(newUser);
        }
    }

    public void delete(String id) {
        userRepo.deleteById(id);
    }

}
