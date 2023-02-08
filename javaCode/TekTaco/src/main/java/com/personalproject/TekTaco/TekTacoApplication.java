package com.personalproject.TekTaco;

import com.personalproject.TekTaco.models.MenuItem;
import com.personalproject.TekTaco.repositories.MenuItemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.List;

@SpringBootApplication
@EnableMongoRepositories
public class TekTacoApplication implements CommandLineRunner {

    @Autowired
    MenuItemRepository menuItemRepo;



    public static void main(String[] args) {
        SpringApplication.run(TekTacoApplication.class, args);
    }

    void updateNEwMenuITem(){

    }
    void createNewMenuItems() {
        System.out.println("Data creation started..");
        menuItemRepo.save(new MenuItem("01", "TekBurrito", 5));
        menuItemRepo.save(new MenuItem("02", "TekQuesadilla", 7));
        menuItemRepo.save(new MenuItem("03", "TekEnchilada", 8));
        System.out.println("Data creation complete..");
    }

    public void showAllMenuItems() {
        menuItemRepo.findAll().forEach(menuItem -> System.out.println(getMenuItemDetails(menuItem)));
    }

    private String getMenuItemDetails(MenuItem menuItem) {
        System.out.println("Menu Item: " + menuItem.getName() + ", \nInStock: " + menuItem.getInStock() + ", \nProduct Type: " + menuItem.getProductType());

        return "";
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

    public void updateProductTypeName(String nameOfProduct) {
        String newProductName = "TekSides";

        List<MenuItem> list = menuItemRepo.findAll(nameOfProduct);
        list.forEach(menuItem -> {
            menuItem.setProductType(newProductName);
        });

        List<MenuItem> listUpdated = menuItemRepo.saveAll(list);

        if (listUpdated != null) System.out.println("Successfully updated " + listUpdated.size() + " items.");
    }

    public void deleteMenuItem(String id) {
        menuItemRepo.deleteById(id);
        System.out.println(" Menu Item with id: " + id + " has been deleted...");
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("---CREATE MENU ITEMS---");
        createNewMenuItems();
        System.out.println("---SHOW ALL MENU ITEMS---");
        showAllMenuItems();
        System.out.println("---GET MENU ITEM BY NAME---");
        getMenuItemByName("Nachos");

    }
}
