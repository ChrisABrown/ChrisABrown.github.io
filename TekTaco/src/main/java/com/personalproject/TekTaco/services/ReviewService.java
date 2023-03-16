package com.personalproject.TekTaco.services;

import com.personalproject.TekTaco.models.MenuItem;
import com.personalproject.TekTaco.models.Review;
import com.personalproject.TekTaco.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepo;
    @Autowired
    private MongoTemplate mongoTemplate;

    public Review createReview(String reviewBody, String sku) {

        Review review = reviewRepo.insert(new Review(reviewBody));

        mongoTemplate.update(MenuItem.class).matching(Criteria.where("sku").is(sku)).apply(new Update().push("reviewsIds").value(review));
        return review;

    }
}
