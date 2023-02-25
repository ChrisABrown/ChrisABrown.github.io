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
    private int SKU;
    private String productType;

    public MenuItem() {
    }

    public MenuItem(String _id, String name, int price, int inStock, String description, String image, int SKU, String productType) {
        super();
        this._id = _id;
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
