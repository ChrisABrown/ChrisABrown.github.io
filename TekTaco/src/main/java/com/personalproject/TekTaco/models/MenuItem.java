package com.personalproject.TekTaco.models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.Id;

@Document(collection = "Inventory")
public class MenuItem {
    @Id
    private String id;
    @Field
    private String name;
    @Field
    private int price;
    @Field
    private int inStock;
    @Field
    private String description;

    @Field
    private String image;

    @Field
    private int SKU;
    @Field
    private String productType;

    public MenuItem() {
    }

    public MenuItem(String id, String name, int price, int inStock, String description, String image, int SKU, String productType) {
        super();
        this.id = id;
        this.name = name;
        this.price = price;
        this.inStock = inStock;
        this.description = description;
        this.image = image;
        this.SKU = SKU;
        this.productType = productType;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getInStock() {
        return inStock;
    }

    public void setInStock(int inStock) {
        this.inStock = inStock;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getSKU() {
        return SKU;
    }

    public void setSKU(int SKU) {
        this.SKU = SKU;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }
}
