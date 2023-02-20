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
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/menu")
public class MenuItemController {

    @Autowired
    MenuItemService menuItemService;

    @GetMapping
    public ResponseEntity<Object>getAllMenuItems(){
        List<MenuItem> menuItems = menuItemService.getAllMenuItems();
        if(!menuItems.isEmpty()){
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "All available Menu Items", true, menuItems), HttpStatus.OK);
        }else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No Data found", false, null), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{productType}")
    public ResponseEntity<Object> getAllMenuItemsByProductType(@PathVariable String productType) {
        List<MenuItem> menuItems = menuItemService.getAllMenuItemsByProductType(productType);
        if (!menuItems.isEmpty()) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "List of " + productType + " Menu Items", true, menuItems), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "No Data found", false, null), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/menuItems/{id}")
    public MenuItem getMenuItemById(@PathVariable @RequestParam("id") String id) {
        return menuItemService.getMenuItemById(id);
    }

    @PostMapping("/add-new-menuItem")
    public ResponseEntity<Object> createNewMenuItem(@RequestBody MenuItem menuItem) {
        MenuItem menuItem1 = menuItemService.getMenuItemById(menuItem.getId());
        if (menuItem1 != null) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), "MenuItem already exists, id" + menuItem.getId(), false, null), HttpStatus.OK);
        }
        MenuItem isCreated = menuItemService.createNewMenuItem(menuItem);
        if (isCreated != null) {
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), isCreated + ", id = " + menuItem.getId(), true, null), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "Not Created", false, null), HttpStatus.OK);
        }
    }


    @PutMapping("/{id}")
    public Optional<MenuItem> updateMenuItem(@PathVariable String id, @RequestBody MenuItem itemDetails) {
        return menuItemService.updateMenuItem(id, itemDetails);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> delete(@PathVariable("id") String id) {
        MenuItem isDeleted = menuItemService.getMenuItemById(id);
        if (isDeleted != null) {
            menuItemService.deleteMenuItem(id);
            return new ResponseEntity<>(new AppResponse(HttpStatus.OK.value(), "MenuItem, id: " + id + " has been deleted", true, null), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new AppResponse(HttpStatus.NOT_FOUND.value(), "MenuItem, id: " + id + " not found", false, null), HttpStatus.OK);
        }

    }


}
