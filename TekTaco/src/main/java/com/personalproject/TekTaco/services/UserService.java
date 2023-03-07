package com.personalproject.TekTaco.services;

import com.personalproject.TekTaco.models.User;
import com.personalproject.TekTaco.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepo;

public List<User> getAllUsers(){
    return userRepo.findAll();
}

public User createNewUser(User newUser){
    return userRepo.save(newUser);
}

public List<User> getUsersByDateJoinedBefore(Date dateBefore){
    //TODO
    //implement date creation and validation

    return userRepo.findUsersByDateJoinedBefore(dateBefore);
}

public List<User> getUsersByDateJoinedAfter(Date dateAfter){
    //TODO
    //implement date creation and validation

    return userRepo.findUsersByDateJoinedAfter(dateAfter);
}

public User getUserByUsername(String username){
    return userRepo.findUserByUsername(username);
}

public void deleteUser(String id){
    userRepo.deleteUserById(id);
}

}
