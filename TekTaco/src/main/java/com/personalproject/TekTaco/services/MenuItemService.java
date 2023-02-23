package com.personalproject.TekTaco.services;


import com.personalproject.TekTaco.models.MenuItem;
import com.personalproject.TekTaco.repositories.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;


@Service
public class MenuItemService  {

    @Autowired
    MenuItemRepository menuItemRepo;


    public MenuItem createNewMenuItem(MenuItem newItem) {
        return menuItemRepo.save(newItem);
    }

    public List<MenuItem> getAllMenuItemsByProductType(String productType) {
        return menuItemRepo.findAll(productType);
    }

    public Optional<MenuItem> getMenuItemById(String id) {
        return menuItemRepo.findById(id);
    }

    public List<MenuItem> getAllMenuItems() {
        return menuItemRepo.findAll();
    }



    public Optional<MenuItem> updateMenuItem(String id, MenuItem itemDetails) {

        Optional<MenuItem> menuItem = menuItemRepo.findById(id);
        if (menuItem.isPresent()) {
            MenuItem newMenuItem = menuItem.get();
            newMenuItem.setId(itemDetails.getId());
            newMenuItem.setName(itemDetails.getName());
            newMenuItem.setPrice(itemDetails.getPrice());
            newMenuItem.setInStock(itemDetails.getInStock());
            newMenuItem.setDescription(itemDetails.getDescription());
            newMenuItem.setSKU(itemDetails.getSKU());
            newMenuItem.setProductType(itemDetails.getProductType());
            return Optional.of(menuItemRepo.save(newMenuItem));
        }
        return menuItem;
    }

    public Optional<MenuItem> getMenuItemByName(String name) {
        Optional<MenuItem> menuItem = Optional.ofNullable(menuItemRepo.findMenuItemByName(name));
        if (menuItem.isPresent()) {
            return menuItem;
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    "No menu item found for the name " + name);
        }
    }

    public void findTheAmountOfMenuItems() {
        long count = menuItemRepo.count();
        System.out.println("Number of items on the Menu:  " + count);
    }

    public void deleteMenuItem(String id) {
       menuItemRepo.deleteById(id);
    }
}
