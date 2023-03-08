package com.personalproject.TekTaco.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
    private String productType;
    private List<Review> reviewList = new ArrayList<>();

    private MenuItem() {
    }

    public MenuItem(String name, int price, int inStock, String description, String image, String sku, List<Review> reviewList, String productType) {
        this.name = name;
        this.price = price;
        this.inStock = inStock;
        this.description = description;
        this.image = image;
        this.sku = sku;
        this.reviewList = reviewList;
        this.productType = productType;
    }

    public MenuItem getInstance(MenuItemDefinition menuItem) {
        return new MenuItem();
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

    @Data
    @Document(collection = "Reviews")
    public static class Review {
        @Id
        private String _id;
        private String content;
        private String menuItemSku;
        private Date dateOf;
        private User reviewOwner;

        public Review(String content, String menuItemSku, Date dateOf, User reviewOwner) {
            this.content = content;
            this.menuItemSku = menuItemSku;
            this.dateOf = dateOf;
            this.reviewOwner = reviewOwner;
        }

        public String getContent() {
            return content;
        }

        public void setContent(String content) {
            this.content = content;
        }

        public String getMenuItemSku() {
            return menuItemSku;
        }

        public void setMenuItemSku(String menuItemSku) {
            this.menuItemSku = menuItemSku;
        }

        public Date getDateOf() {
            return dateOf;
        }

        public void setDateOf(Date dateOf) {
            this.dateOf = dateOf;
        }

        public User getReviewOwner() {
            return reviewOwner;
        }

        public void setReviewOwner(User reviewOwner) {
            this.reviewOwner = reviewOwner;
        }

        public Review() {
        }

    }
}
