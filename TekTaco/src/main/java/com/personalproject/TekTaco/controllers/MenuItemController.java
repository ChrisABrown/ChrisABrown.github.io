package com.personalproject.TekTaco.controllers;

import com.personalproject.TekTaco.models.MenuItem;
import com.personalproject.TekTaco.services.MenuItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/menu")
public class MenuItemController {

  @Autowired
  MenuItemService menuItemService;

    @GetMapping
    public List<MenuItem> getAllMenuItems() {
        return menuItemService.getAllMenuItems();
    }

    @GetMapping("/{id}")
    public MenuItem getMenuItemById(@PathVariable @RequestParam String id) {
        return menuItemService.getMenuItemById(id);
    }

    @PostMapping("/menu/newItems")
    public List<MenuItem> createMenuItem(@Validated @RequestBody List<MenuItem> itemsList) {
        return menuItemService.createNewMenuItems(itemsList);
    }

    @PutMapping("/{id}")
    public Optional<MenuItem> updateMenuItem(@PathVariable String id, @RequestBody MenuItem itemDetails) {
        return menuItemService.updateMenuItem(id, itemDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteMenuItem(@PathVariable String id) {
        menuItemService.deleteMenuItem(id);
    }


}
