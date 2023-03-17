package com.personalproject.TekTaco.services;


import com.personalproject.TekTaco.models.MenuItem;
import com.personalproject.TekTaco.repositories.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class MenuItemService {

    @Autowired
    private MenuItemRepository menuItemRepo;


    public List<MenuItem> getAllMenuItems() {
        return menuItemRepo.findAll();
    }

    public Optional<MenuItem> getMenuItemBySku(String sku) {
        return menuItemRepo.findMenuItemBySku(sku);
    }


    public MenuItem createNewMenuItem(MenuItem newItem) {
        newItem.setSku();
        return menuItemRepo.save(newItem);
    }


    public Optional<MenuItem> getMenuItemById(String id) {
        return menuItemRepo.findById(id);
    }


    public void updateMenuItem(String id, MenuItem itemDetails) {
        MenuItem newMenuItem = new MenuItem();
        Optional<MenuItem> menuItem = menuItemRepo.findById(id);
        if (menuItem.isPresent()) {
            newMenuItem = menuItem.get();
            newMenuItem.setName(itemDetails.getName());
            newMenuItem.setPrice(itemDetails.getPrice());
            newMenuItem.setInStock(itemDetails.getInStock());
            newMenuItem.setImage(itemDetails.getImage());
            newMenuItem.setDescription(itemDetails.getDescription());
            newMenuItem.setRating(itemDetails.getRating());
            newMenuItem.setNumOfReviews(itemDetails.getNumOfReviews());
            newMenuItem.setProductType(itemDetails.getProductType());

            menuItemRepo.save(newMenuItem);
        }
    }

    public void deleteMenuItem(String id) {
        menuItemRepo.deleteById(id);
    }

}