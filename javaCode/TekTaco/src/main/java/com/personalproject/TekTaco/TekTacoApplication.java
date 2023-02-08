package com.personalproject.TekTaco;

import models.MenuItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import repositories.MenuItemRepository;

import java.util.List;

@SpringBootApplication
@EnableMongoRepositories
public class TekTacoApplication implements CommandLineRunner {
    @Autowired
    MenuItemRepository menuItemRepository;

    public static void main(String[] args) {
        SpringApplication.run(TekTacoApplication.class, args);
    }

    void createNewMenuItems() {
        System.out.println("Data creation started..");
        menuItemRepository.save(new MenuItem("01", "TekBurrito", 5));
        menuItemRepository.save(new MenuItem("02", "TekQuesadilla", 7));
        menuItemRepository.save(new MenuItem("03", "TekEnchilada", 8));
        System.out.println("Data creation complete..");
    }

    public void showAllMenuItems() {
        menuItemRepository.findAll().forEach(menuItem -> System.out.println(getMenuItemdetails(menuItem)));
    }

    private String getMenuItemdetails(MenuItem menuItem) {
        System.out.println("Menu Item: " + menuItem.getName() + ", \nInStock: " + menuItem.getInStock() + ", \nProduct Type: " + menuItem.getProductType());

        return "";
    }

    public void getMenuItemByName(String name) {
        long count = menuItemRepository.count();
        System.out.println("Looking for item :" + name);
        menuItemRepository.findItemByName(name);
        System.out.println("Found " + count + " of :" + name);
    }

    public void getMenuItemByType(String productType) {
        System.out.println("Getting items of the type " + productType);
        List<MenuItem> list = menuItemRepository.findAll(productType);

        list.forEach(menuItem -> System.out.println("Name: " + menuItem.getName() + "InStock: " + menuItem.getInStock()));
        System.out.println("Found " + productType + " items");
    }

    public void findTheAmountOfMenuItems() {
        long count = menuItemRepository.count();
        System.out.println("Number of documents in this collection " + count);
    }

    public void updateProductTypeName(String nameOfProduct){
        String newProductName = "TekSides";

        List<MenuItem> list = menuItemRepository.findAll(nameOfProduct);
        list.forEach(menuItem -> {
            menuItem.setProductType(newProductName);
        });

        List<MenuItem> listUpdated = menuItemRepository.saveAll(list);

        if(listUpdated != null)
            System.out.println("Successfully updated " + listUpdated.size() + " items.");
    }

    @Override
    public void run(String... args) throws Exception {

    }
}
