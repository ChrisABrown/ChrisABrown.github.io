package com.personalproject.TekTaco.services;

import com.personalproject.TekTaco.models.User;
import com.personalproject.TekTaco.repositories.UserRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User addUser(User user){
        user.setUsername();
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRoles("ROLE_USER");
        return userRepo.save(user);
    }

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public Optional<User> getUserByUserName(String userName) {
        return userRepo.findByUserName(userName);
    }
    public User getUserByEmail(String email){return userRepo.findByEmail(email);}
    public List<User> getUsersByRoles(String roles){return userRepo.findByRoles(roles);}
    public User getUserDetails(String username){
        User withUserName = userRepo.findWithUserName(username);
        return withUserName;
         }

    public void updateUser(String username, User newUserDetails){
        User user = new User();
        Optional<User> userForUpdate = userRepo.findByUserName(username);
        if(userForUpdate.isPresent()){
            user = userForUpdate.get();
            user.setFirstName(newUserDetails.getFirstName());
            user.setLastName(newUserDetails.getLastName());
            user.setUsername();
            user.setRoles(newUserDetails.getRoles());
            user.setEmail(newUserDetails.getEmail());
            user.setPassword(passwordEncoder.encode(newUserDetails.getPassword()));

            userRepo.save(user);
        }
    }

    public void deleteUser(ObjectId id){
        userRepo.deleteById(id);
    }


}
