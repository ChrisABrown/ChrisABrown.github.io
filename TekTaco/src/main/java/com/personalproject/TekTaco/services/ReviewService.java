package com.personalproject.TekTaco.services;

import com.personalproject.TekTaco.models.Review;
import com.personalproject.TekTaco.models.User;
import com.personalproject.TekTaco.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ReviewService {
    @Autowired
    ReviewRepository reviewRepo;


    public List<Review> getAllReviewsForMenuItemWithSku(String sku) {
        return reviewRepo.findAll(sku);
    }

    public List<Review> getAllReviewsByReviewOwnerOrderedByDateJoined(Date dateJoined, User reviewOwner) {
        return reviewRepo.findByDateOfAndReviewOwner(dateJoined, reviewOwner);
    }

    public List<Review> getAllGoodReviews() {
        String content = "good";
        return reviewRepo.findByContent(content);
    }

    public List<Review> getAllBadReviews() {
        String content = "bad";
        return reviewRepo.findByContent(content);
    }

    public void deleteReview(String id) {
        reviewRepo.deleteReviewById(id);
    }
}
