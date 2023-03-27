package com.personalproject.TekTaco.controllers;

import com.personalproject.TekTaco.payload.AppResponse;
import com.personalproject.TekTaco.models.MenuItem;
import com.personalproject.TekTaco.services.MenuItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;

@RestController
//@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
@RequestMapping("api/v1/menuItems")
public class MenuItemController {

    @Autowired
    private MenuItemService menuItemService;

    @GetMapping
    public ResponseEntity<Object> getAllMenuItems() {
        List<MenuItem> allMenuItems = menuItemService.getAllMenuItems();
        return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "List of all Menu Items: ", true, allMenuItems), HttpStatus.OK);
    }

    @GetMapping("/{sku}")
    public ResponseEntity<Object> getMenuItemBySku(@PathVariable String sku) {
        Optional<MenuItem> foundMenuItem = menuItemService.getMenuItemBySku(sku);
        if (foundMenuItem.isPresent() && Objects.equals(foundMenuItem.get().getSku(), sku)) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "MenuItem with Sku: " + sku + " found", true, foundMenuItem), HttpStatus.FOUND);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found", false, null), HttpStatus.NOT_FOUND);
    }


    @PostMapping
    public ResponseEntity<Object> createNewMenuItems(@RequestBody Set<MenuItem> newMenuItems) {
        List<MenuItem> menuItemList = menuItemService.createNewMenuItems(newMenuItems);
        return new ResponseEntity<>(new AppResponse(HttpStatus.CREATED.value(), "New Menu Items created", true, menuItemList), HttpStatus.CREATED);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Object> updateMenuItem(@PathVariable String id, @RequestBody MenuItem updatedMenuItem) {
        if (Objects.equals(updatedMenuItem.get_id(), id)) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found for id: " + id, false, null), HttpStatus.NOT_FOUND);
        }
        menuItemService.updateMenuItem(id, updatedMenuItem);
        return new ResponseEntity<>((new AppResponse(HttpStatus.FOUND.value(), "Updated the menu item with id: " + id, true, updatedMenuItem)), HttpStatus.FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
        Optional<MenuItem> isDeleted = menuItemService.getMenuItemById(id);
        if (isDeleted.isPresent()) {
            menuItemService.deleteMenuItem(id);
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "MenuItem with id: " + id + " has been deleted", true, null), HttpStatus.OK);
        }
        return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "MenuItem with id: " + id + " not found", false, null), HttpStatus.NOT_FOUND);
    }


}
