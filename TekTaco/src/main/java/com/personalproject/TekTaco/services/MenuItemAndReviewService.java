package com.personalproject.TekTaco.services;


import com.personalproject.TekTaco.models.MenuItem;
import com.personalproject.TekTaco.models.User;
import com.personalproject.TekTaco.repositories.MenuItemRepository;
import com.personalproject.TekTaco.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;


@Service
public class MenuItemAndReviewService {

    @Autowired
    MenuItemRepository menuItemRepo;
    ReviewRepository reviewRepo;
    private String id;
    private MenuItem itemDetails;


    public MenuItem createNewMenuItem(MenuItem newItem) {
        return menuItemRepo.save(newItem);
    }

    public MenuItem.Review createNewReview(MenuItem.Review newReview) {
        return reviewRepo.save(newReview);
    }

    public List<MenuItem> getAllMenuItemsByProductType(String productType) {
        return menuItemRepo.findAll(productType);
    }

    public Optional<MenuItem> getMenuItemById(String id) {
        return menuItemRepo.findById(id);
    }

    public Optional<MenuItem> getMenuItemBySku(String sku) {
        return menuItemRepo.findMenuItemBySku(sku);
    }

    public List<MenuItem> getAllMenuItems() {
        return menuItemRepo.findAll();
    }


    public Optional<MenuItem> updateMenuItem(String id, MenuItem itemDetails) {
        Optional<MenuItem> result;
        this.id = id;
        this.itemDetails = itemDetails;

        Optional<MenuItem> menuItem = menuItemRepo.findById(id);
        if (menuItem.isPresent()) {
            MenuItem newMenuItem = menuItem.get();
            newMenuItem.set_id(itemDetails.get_id());
            newMenuItem.setName(itemDetails.getName());
            newMenuItem.setPrice(itemDetails.getPrice());
            newMenuItem.setInStock(itemDetails.getInStock());
            newMenuItem.setDescription(itemDetails.getDescription());
            newMenuItem.setSku(itemDetails.getSku());
            newMenuItem.setProductType(itemDetails.getProductType());

            result = Optional.of(menuItemRepo.save(newMenuItem));
        } else {
            result = menuItem;
        }
        return result;
    }

    public Optional<MenuItem> getMenuItemByName(String name) {
        Optional<MenuItem> menuItem = Optional.ofNullable(menuItemRepo.findMenuItemByName(name));
        if (menuItem.isPresent()) {
            return menuItem;
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No menu item found for the name " + name);
        }
    }

    public long findTheAmountOfMenuItems() {
        long count;
        return count = menuItemRepo.count();
    }

    public void deleteMenuItem(String id) {
        menuItemRepo.deleteMenuItemBy_id(id);
    }

    public List<MenuItem.Review> getAllReviewsForMenuItemWithSku(String sku) {
        return reviewRepo.findAll(sku);
    }

    public List<MenuItem.Review> getAllReviewsByReviewOwnerOrderedByDateJoined(Date dateJoined, User reviewOwner) {
        return reviewRepo.findByDateOfAndReviewOwner(dateJoined, reviewOwner);
    }

    public Optional<MenuItem.Review> findReviewById(String id) {
        return reviewRepo.findByReviewId(id);
    }


    public void deleteReview(String id) {
        reviewRepo.deleteReviewById(id);
    }

    public int findTotalReviewsForEachMenuItem() {
        AtomicInteger reviewCount = new AtomicInteger();
        List<MenuItem> menuItemList = menuItemRepo.findAll();
        menuItemList.forEach(menuItem -> {
            reviewCount.set(menuItem.getReviewList().size());
        });
        return reviewCount.get();
    }
}
