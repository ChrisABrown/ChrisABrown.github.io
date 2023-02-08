package com.personalproject.TekTaco.models;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;

@Document(collection = "Inventory")
public class MenuItem{
    @Id
    private String id;
    private String name;
    private int price;
    private int inStock;
    private String description;
    private int SKU;
    private String productType;
    public MenuItem(){

    }

    public MenuItem(String id, String name, int price, int inStock, String description, int SKU, String productType) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.inStock = inStock;
        this.description = description;
        this.SKU = SKU;
        this.productType = productType;
    }

    public MenuItem(String id, String name, int price) {
        super();
        this.id = id;
        this.name = name;
        this.price = price;
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
