package com.personalproject.TekTaco.controllers;

import com.personalproject.TekTaco.payload.AppResponse;
import com.personalproject.TekTaco.models.Review;
import com.personalproject.TekTaco.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/review")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @PostMapping
    public ResponseEntity<Object> createReview(@RequestBody Map<String, String> payload){
        Review createdReview = reviewService.createReview(payload.get("reviewBody"), payload.get("sku"));
        return new ResponseEntity<>(new AppResponse(HttpStatus.CREATED.value(), "New Review Created" , true, createdReview), HttpStatus.CREATED);
    }



}
