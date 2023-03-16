package com.personalproject.TekTaco.services;


import com.personalproject.TekTaco.models.MenuItem;
import com.personalproject.TekTaco.repositories.MenuItemRepository;
import org.bson.types.ObjectId;
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
        return menuItemRepo.save(newItem);
    }


    public Optional<MenuItem> getMenuItemById(ObjectId id) {
        return menuItemRepo.findById(id);
    }


    public void updateMenuItem(ObjectId id, MenuItem itemDetails) {
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

            Optional.of(menuItemRepo.save(newMenuItem));
        }
    }

    public void deleteMenuItem(ObjectId id) {
        menuItemRepo.deleteMenuItemBy_id(id);
    }

}