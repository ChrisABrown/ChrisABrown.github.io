package com.personalproject.TekTaco.repositories;

import com.personalproject.TekTaco.models.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, ObjectId> {


    @Query(value = "{'username': '?0'}")
   Optional<User> findByUserName(String username);

    @Query(value = "{'username': ?0}", fields = "{'username': 1," + " 'firstName': 1," + " 'lastName': 1," + " 'email': 1," + " 'orderList': 1}")
    User getUserUsernameByUsername(String username);

    @Query(value = "{'email': '?0'}")
    User findByEmail(String email);

    @Query(value = "{'roles': '?0'}")
    List<User> findByRoles(String roles);

    @Query(value = "{'userName': '?0'}")
    User findWithUserName(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);


}
