package com.personalproject.TekTaco.controllers;


import com.personalproject.TekTaco.models.AppResponse;
import com.personalproject.TekTaco.models.MenuItem;
import com.personalproject.TekTaco.models.Review;
import com.personalproject.TekTaco.services.MenuItemService;
import com.personalproject.TekTaco.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
@RequestMapping("/menuItems/{sku}/reviews")
public class ReviewController {

    @Autowired
    MenuItemService menuItemService;
    ReviewService reviewService;

    @GetMapping("/get")
    public ResponseEntity<Object> getAllReviewsForMenuItemWithSku(@PathVariable("sku") @RequestParam String sku) {
        Optional<MenuItem> reviewedMenuItem = menuItemService.getMenuItemBySku(sku);
        List<Review> reviewsList = reviewService.getAllReviewsForMenuItemWithSku(sku);

        if (reviewsList.isEmpty()) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "Could not find reviews for menuItem with sku: " + sku, false, null), HttpStatus.NOT_FOUND);
        } else if (Objects.equals(reviewedMenuItem.get().getSku(), sku)) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "All reviews for menuItem with sku: " + sku, true, reviewsList), HttpStatus.FOUND);
        }
        return null;
    }

    @PostMapping()
    public ResponseEntity<Object> createReviewForMenuItemWithSku(@PathVariable("sku") @RequestParam String sku, @RequestBody String content) {
        Optional<MenuItem> menuItemOptional = menuItemService.getMenuItemBySku(sku);
        menuItemOptional.get().setReviewList(reviewService.);
    }
}
