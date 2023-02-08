package com.personalproject.TekTaco.services;


import com.personalproject.TekTaco.exceptions.ItemNotFoundException;
import com.personalproject.TekTaco.models.MenuItem;
import com.personalproject.TekTaco.repositories.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
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

    public MenuItem updateMenuItem(String id, MenuItem itemDetails) {

       Optional<MenuItem> menuItem = menuItemRepo.findById(id);
       try {
           MenuItem newMenuItem = menuItem.get();
           newMenuItem.setId(itemDetails.getId());
           newMenuItem.setName(itemDetails.getName());
           newMenuItem.setPrice(itemDetails.getPrice());
           newMenuItem.setInStock(itemDetails.getInStock());
           newMenuItem.setDescription(itemDetails.getDescription());
           newMenuItem.setSKU(itemDetails.getSKU());
           newMenuItem.setProductType(itemDetails.getProductType());
           return menuItemRepo.save(newMenuItem);
       }
       catch (ItemNotFoundException exception){
           throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                   "No Item found for the id " + id);
       }
    }

    public void getMenuItemByName(String name) {
        long count = menuItemRepo.count();
        System.out.println("Looking for item :" + name);
        menuItemRepo.findItemByName(name);
        System.out.println("Found " + count + " of :" + name);
    }

    public void getMenuItemByType(String productType) {
        System.out.println("Getting items of the type " + productType);
        List<MenuItem> list = menuItemRepo.findAll(productType);

        list.forEach(menuItem -> System.out.println("Name: " + menuItem.getName() + "InStock: " + menuItem.getInStock()));
        System.out.println("Found " + productType + " items");
    }

    public void findTheAmountOfMenuItems() {
        long count = menuItemRepo.count();
        System.out.println("Number of documents in this collection " + count);
    }

    public void deleteMenuItem(String id) {
        menuItemRepo.deleteById(id);
        System.out.println(" Menu Item with id: " + id + " has been deleted...");
    }


}
