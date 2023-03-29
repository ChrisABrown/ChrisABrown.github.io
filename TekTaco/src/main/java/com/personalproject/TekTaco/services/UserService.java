package com.personalproject.TekTaco.services;

import com.personalproject.TekTaco.models.User;
import com.personalproject.TekTaco.repositories.UserRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User addUser(User user){
        user.setUsername();
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRoles("ROLE_USER");
        return userRepo.save(user);
    }

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }
    public User getUserUsernameByUsername(String username){
        return userRepo.getUserUsernameByUsername(username);
    }
    public Optional<User> getUserByUserName(String userName) {
        return userRepo.findByUserName(userName);
    }
    public User getUserByEmail(String email){return userRepo.findByEmail(email);}
    public List<User> getUsersByRoles(String roles){return userRepo.findByRoles(roles);}
    public User getUserDetails(String username){
        return userRepo.findWithUserName(username);
         }

    public void updateUser(String username, User newUserDetails){
        User user = new User();
        Optional<User> userForUpdate = userRepo.findByUserName(username);
        if(userForUpdate.isPresent()){
            user = userForUpdate.get();
            user.setUserId(userForUpdate.get().getUserId());
            user.setFirstName(newUserDetails.getFirstName());
            user.setLastName(newUserDetails.getLastName());
            user.setUsername();
            user.setRoles(userForUpdate.get().getRoles());
            user.setEmail(newUserDetails.getEmail());
            user.setPassword(passwordEncoder.encode(newUserDetails.getPassword()));

            userRepo.save(user);
        }
    }

    public void deleteUser(ObjectId id){
        userRepo.deleteById(id);
    }

    public boolean existsByUsername(String username){
        return userRepo.existsByUsername(username);
    }
    public boolean existsByEmail(String email){
        return userRepo.existsByEmail(email);
    }


}
