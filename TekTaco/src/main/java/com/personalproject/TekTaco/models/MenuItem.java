package com.personalproject.TekTaco.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;


@Document(collection = "Inventory")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MenuItem {
    @Id
    private ObjectId _id;

    private String name;
    private int price;
    private int inStock;
    private String description;
    private String image;
    private String sku;
    private Double rating;
    private Integer numOfReviews;

    private String productType;
    @DocumentReference
    private List<Review> reviewIds;

    public MenuItem(String name, int price, int inStock, String description, String image, String sku, String productType) {
        this.name = name;
        this.price = price;
        this.inStock = inStock;
        this.description = description;
        this.image = image;
        this.sku = sku;
        this.productType = productType;
    }
}
