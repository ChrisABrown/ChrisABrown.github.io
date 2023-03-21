package com.personalproject.TekTaco.repositories;

import com.personalproject.TekTaco.models.User;
import org.bson.types.ObjectId;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, ObjectId> {


    @Query(value = "{'userName': '?0'}")
   Optional<User> findByUserName(String userName);

    @Query(value = "{'email': '?0'}")
    User findByEmail(String email);

    @Query(value= "{'roles': '?0'}")
    List<User> findByRoles(String roles);

    @Query(value = "{'userName': '?0'}" )
    User findWithUserName(String username);


}
