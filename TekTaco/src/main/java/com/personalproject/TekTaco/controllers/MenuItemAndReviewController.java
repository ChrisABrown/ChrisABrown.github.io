package com.personalproject.TekTaco.controllers;

import com.personalproject.TekTaco.models.AppResponse;
import com.personalproject.TekTaco.models.MenuItem;
import com.personalproject.TekTaco.services.MenuItemAndReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
@RequestMapping("/menuItems")
public class MenuItemAndReviewController {

    @Autowired
    MenuItemAndReviewService menuItemAndReviewService;

    @GetMapping
    public ResponseEntity<Object> getAllMenuItems() {
        List<MenuItem> menuItems = menuItemAndReviewService.getAllMenuItems();
        if (!menuItems.isEmpty()) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "All available Menu Items", true, menuItems), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No Data found", false, null), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{productType}")
    public ResponseEntity<Object> getAllMenuItemsByProductType(@PathVariable String productType) {
        List<MenuItem> menuItems = menuItemAndReviewService.getAllMenuItemsByProductType(productType);
        if (!menuItems.isEmpty()) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "List of " + productType + " Menu Items", true, menuItems), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found", false, null), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getOne/{id}")
    public ResponseEntity<Object> getMenuItemById(@PathVariable String id) {
        List<MenuItem> menuItemList = menuItemAndReviewService.getAllMenuItems();

        Optional<MenuItem> foundMenuItem = menuItemAndReviewService.getMenuItemById(id);

        if (!menuItemList.isEmpty()) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "MenuItem with id: " + id + " found", true, foundMenuItem), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found", false, null), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add-new-menuItem")
    public ResponseEntity<Object> createNewMenuItem(@RequestBody MenuItem menuItem) {
        Optional<MenuItem> menuItem1 = menuItemAndReviewService.getMenuItemById(menuItem.get_id());
        if (menuItem1.isPresent()) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "MenuItem already exists, id: " + menuItem.get_id(), false, null), HttpStatus.FOUND);
        }
        MenuItem newMenuItem = menuItemAndReviewService.createNewMenuItem(menuItem);
        if (newMenuItem != null) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.CREATED.value(), newMenuItem + ", id: " + newMenuItem.get_id(), true, newMenuItem), HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "Not Created", false, null), HttpStatus.NOT_FOUND);
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<Object> updateMenuItem(@PathVariable String id, @RequestBody MenuItem updatedMenuItem) {
        Optional<MenuItem> existingMenuItem = menuItemAndReviewService.getMenuItemById(id);

        if (existingMenuItem.isPresent() && updatedMenuItem.get_id().equals(existingMenuItem.get().get_id())) {
            String existingItemId = existingMenuItem.get().get_id();
            menuItemAndReviewService.updateMenuItem(existingItemId, updatedMenuItem);
            return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "Updated menuItem with id: " + existingItemId, true, updatedMenuItem), HttpStatus.FOUND);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found for id: " + existingMenuItem, false, null), HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
        Optional<MenuItem> isDeleted = menuItemAndReviewService.getMenuItemById(id);
        if (isDeleted.isPresent()) {
            menuItemAndReviewService.deleteMenuItem(id);
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "MenuItem, id: " + id + " has been deleted", true, null), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "MenuItem, id: " + id + " not found", false, null), HttpStatus.OK);
        }

    }

    @PostMapping("/{sku}/reviews")
    public ResponseEntity<Object> createReviewForMenuItemWithSku(@PathVariable @RequestParam String sku, @RequestBody MenuItem.Review review) {
        Optional<MenuItem> anyMenuItem = menuItemAndReviewService.getMenuItemBySku(sku);
        List<MenuItem.Review> anyMenuItemReviewList = anyMenuItem.get().getReviewList();
        anyMenuItemReviewList.add(review);
        if (review != null && anyMenuItemReviewList.contains(review)) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.CREATED.value(), "New review created for menuItem with sku: " + sku, true, review.getContent()), HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "Not Created", false, null), HttpStatus.NOT_FOUND);
        }
    }


    @GetMapping("/{sku}/reviews")
    public ResponseEntity<Object> getAllReviewsForMenuItemWithSku(@PathVariable @RequestParam String sku) {
        Optional<MenuItem> reviewedMenuItem = menuItemAndReviewService.getMenuItemBySku(sku);
        List<MenuItem.Review> reviewListForReviewedMenuItem = reviewedMenuItem.get().getReviewList();

        if (reviewListForReviewedMenuItem.isEmpty()) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "Could not find reviews for menuItem with sku: " + sku, false, null), HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "All reviews for menuItem with sku: " + sku, true, reviewedMenuItem), HttpStatus.FOUND);
        }
    }

    @DeleteMapping("/{sku}/reviews/{id}")
    public ResponseEntity<Object> deleteReview(@PathVariable String id, @PathVariable String sku) {
        List<MenuItem.Review> reviewList = menuItemAndReviewService.getAllReviewsForMenuItemWithSku(sku);
        Optional<MenuItem.Review> foundReview = menuItemAndReviewService.findReviewById(id);
        if (reviewList.contains(foundReview)) {

            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "Review with id: " + id + " for MenuITem with sku: " + sku + " has been  successfully deleted", true, foundReview), HttpStatus.OK);

        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "Could not find review with the id: " + " for the MenuItem with sku: " + sku, false, null), HttpStatus.NOT_FOUND);
        }
    }

}
