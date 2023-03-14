package com.personalproject.TekTaco.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "Inventory")
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

    private MenuItem() {

    }

    public MenuItem(String name, int price, int inStock, String description, String image, String sku, Double rating, String productType) {
        this.name = name;
        this.price = price;
        this.inStock = inStock;
        this.description = description;
        this.image = image;
        this.sku = sku;
        this.rating = rating;
        this.productType = productType;
    }

    public MenuItem getInstance(MenuItemDefinition menuItem) {
        return new MenuItem();
    }
    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
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

    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

}
