package com.personalproject.TekTaco.repositories;

import com.personalproject.TekTaco.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface UserRepository extends MongoRepository<User, String> {

    @Query("{'_id': ?0}")
    Optional<User> findById(String id);
    @Query(value ="{'_id': ?0, 'username': ?0, 'dateJoined': ?0, 'email': ?0}", sort ="{'username': 1}")
    Set<User> find();

    @Query("{'username':  ?0}")
    User findUserByUsername(String username);

    @Query(value ="{'username': ?0, 'dateJoined': ?0}", sort = "{'dateJoined': 1}")
    List<User> findUsersByDateJoinedAfter(Date dateAfter);

    @Query(value ="{'username': ?0}", sort = "{'dateJoined': 1}")
    List<User> findUsersByDateJoinedBefore(Date dateBefore);

    @Query(value = "{'_id': ?0}", delete = true)
    void deleteUserById(String id);

    long count();
};
