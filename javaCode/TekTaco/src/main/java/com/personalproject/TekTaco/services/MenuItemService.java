package com.personalproject.TekTaco.services;


import com.personalproject.TekTaco.models.MenuItem;
import com.personalproject.TekTaco.repositories.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;


@Service
public class MenuItemService {

    @Autowired
    MenuItemRepository menuItemRepo;


    public List<MenuItem> createNewMenuItems(List<MenuItem> newItems) {
        return menuItemRepo.saveAll(newItems);
    }

    public List<MenuItem> getAllMenuItemsByProductType(String productType) {
        List<MenuItem> itemsByType = menuItemRepo.findAll(productType);
        itemsByType.forEach(menuItem -> {
            String details = getMenuItemDetails(menuItem);
            System.out.println(details + "\n");
        });
        return itemsByType;
    }
    public MenuItem getMenuItemById(String id){
        return menuItemRepo.findItemById(id);
    }

    public List<MenuItem> getAllMenuItems(int page, int limit) {
        Pageable paging = PageRequest.of(page, limit);
        Page<MenuItem> pagedResults = menuItemRepo.findAll(paging);
        menuItemRepo.findAll().forEach(menuItem -> System.out.println(getMenuItemDetails(menuItem)));
        pagedResults.toList().forEach(menuItem -> {
            String details = getMenuItemDetails(menuItem);
            System.out.println(details + "\n");
        });
        return pagedResults.toList();
    }

    private String getMenuItemDetails(MenuItem menuItem) {
        System.out.println("Menu Item: " + menuItem.getName() + ", \nInStock: " + menuItem.getInStock() + ", \nProduct Type: " + menuItem.getProductType());

        return "";
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
        Optional<MenuItem> menuItem = Optional.ofNullable(menuItemRepo.findItemByName(name));
        if (menuItem.isPresent()) {
            return menuItem;
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    "No menu item found for the name " + name);
        }
    }

    public void findTheAmountOfMenuItems() {
        long count = menuItemRepo.count();
        System.out.println("Number of documents in this collection " + count);
    }

    public void deleteMenuItem(String id) {
        try {
            menuItemRepo.deleteById(id);
        } catch (EmptyResultDataAccessException exception) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    "No menu item found for the id " + id);
        }

    }


}
