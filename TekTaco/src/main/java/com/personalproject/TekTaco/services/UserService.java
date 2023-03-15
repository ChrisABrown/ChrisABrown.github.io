package com.personalproject.TekTaco.services;

import com.personalproject.TekTaco.models.User;
import com.personalproject.TekTaco.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public Set<User> getAllUsers() {
        return userRepo.find();
    }

    public Optional<User> getUserById(String id) {
        return userRepo.findById(id);
    }

    public User createNewUser(User newUser) {
        return userRepo.save(newUser);
    }

    public Set<User> getUsersByDateJoinedBefore(Date dateBefore) {
        //TODO
        //implement date creation and validation
        Date currentDate = new Date();
        if (currentDate.before(dateBefore)) {
            return userRepo.find();
        }
        return null;
    }

    public List<User> getUsersByDateJoinedAfter(Date dateAfter) {
        //TODO
        //implement date creation and validation
        Date currentDate = new Date();
        if (currentDate.after(dateAfter)) {
            return userRepo.findAll();
        }
        return userRepo.findUsersByDateJoinedAfter(dateAfter);
    }

    public User getUserByUsername(String username) {
        return userRepo.findUserByUsername(username);
    }

    public void deleteUser(String id) {
        userRepo.deleteUserById(id);
    }

}
