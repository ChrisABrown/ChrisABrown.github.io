package com.personalproject.TekTaco.controllers;

import com.personalproject.TekTaco.models.AppResponse;
import com.personalproject.TekTaco.models.MenuItem;
import com.personalproject.TekTaco.services.MenuItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT, RequestMethod.PATCH})
@RequestMapping("/menu")
public class MenuItemController {

    @Autowired
    MenuItemService menuItemService;

    @GetMapping
    public ResponseEntity<Object> getAllMenuItems() {
        List<MenuItem> menuItems = menuItemService.getAllMenuItems();
        if (!menuItems.isEmpty()) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "All available Menu Items", true, menuItems), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No Data found", false, null), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{productType}")
    public ResponseEntity<Object> getAllMenuItemsByProductType(@PathVariable String productType) {
        List<MenuItem> menuItems = menuItemService.getAllMenuItemsByProductType(productType);
        if (!menuItems.isEmpty()) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "List of " + productType + " Menu Items", true, menuItems), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found", false, null), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getOne/{id}")
    public ResponseEntity<Object> getMenuItemById(@PathVariable("id") String id) {
        List<MenuItem> menuItemList = menuItemService.getAllMenuItems();

        Optional<MenuItem> foundMenuItem = menuItemService.getMenuItemById(id);

        if (!menuItemList.isEmpty()) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "MenuItem with id: " + id + " found", true, foundMenuItem), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found", false, null), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add-new-menuItem")
    public ResponseEntity<Object> createNewMenuItem(@RequestBody MenuItem menuItem) {
        Optional<MenuItem> menuItem1 = menuItemService.getMenuItemById(menuItem.get_id());
        if (menuItem1.isPresent()) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), "MenuItem already exists, id" + menuItem.get_id(), false, null), HttpStatus.OK);
        }
        MenuItem isCreated = menuItemService.createNewMenuItem(menuItem);
        if (isCreated != null) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), isCreated + ", id = " + menuItem.get_id(), true, menuItem1), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "Not Created", false, null), HttpStatus.OK);
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<Object> updateMenuItem(@PathVariable String id, @RequestBody MenuItem updatedMenuItem) {
        Optional<MenuItem> existingMenuItem = menuItemService.getMenuItemById(id);
        if (existingMenuItem.isPresent()) {
            menuItemService.updateMenuItem(id, updatedMenuItem);
            return new ResponseEntity<>(new AppResponse(HttpStatus.FOUND.value(), "Updated menuItem with id: " + id, true, updatedMenuItem), HttpStatus.FOUND);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No data found for id: " + id, false, null), HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> delete(@PathVariable("id") String id) {
        Optional<MenuItem> isDeleted = menuItemService.getMenuItemById(id);
        if (isDeleted.isPresent()) {
            menuItemService.deleteMenuItem(id);
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "MenuItem, id: " + id + " has been deleted", true, null), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "MenuItem, id: " + id + " not found", false, null), HttpStatus.OK);
        }

    }


}
