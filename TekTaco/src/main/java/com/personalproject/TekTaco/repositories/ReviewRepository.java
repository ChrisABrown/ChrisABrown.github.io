package com.personalproject.TekTaco.repositories;


import com.personalproject.TekTaco.models.Review;
import com.personalproject.TekTaco.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface ReviewRepository extends MongoRepository<Review, String> {

    @Query("{'_id':  ?0}")
    Optional<Review> findById(String id);

    @Query(value = "{'menuItemSku':?0}", sort = "{'dateOf': 1}")
    List<Review> findAll(String sku);

    @Query(value = "{'content': ?0}")
    List<Review> findByContent(String content);

    @Query(value ="{'dateOf':  ?0, 'reviewOwner': ?0}", sort="{'dateJoined': 1}")
    List<Review> findByDateOfAndReviewOwner(Date dateOf, User reviewOwner);

    @Query(value = "{'_id': ?0}", delete = true)
    void deleteReviewById(String id);

    long count();
}
