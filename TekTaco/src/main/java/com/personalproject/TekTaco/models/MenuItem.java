package com.personalproject.TekTaco.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;


@Document(collection = "Inventory")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MenuItem {
    @Id
    private String _id;

    private String name;
    private int price;
    private int inStock;
    private String description;
    private String image;

    private String sku;

    private Double rating;
    private String productType;
    @DocumentReference(lazy = true)
    private List<Review> reviewIds;
    private Integer numOfReviews;

    public MenuItem(String name, int price, int inStock, String description, String image, String sku, String productType) {
        this.name = name;
        this.price = price;
        this.inStock = inStock;
        this.description = description;
        this.image = image;
        this.sku = sku;
        this.productType = productType;

    }

    public void setSku() {
        Random num = new Random();
        int skuGenerator = num.nextInt();
        this.sku = Integer.toHexString(skuGenerator);
    }


}
