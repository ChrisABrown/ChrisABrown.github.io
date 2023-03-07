package com.personalproject.TekTaco.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document(collection = "Reviews")
public class Review {
    @Id
    private String _id;
    private String content;
    private String menuItemSku;
    private Date dateOf;
    private User reviewOwner;

    public Review() {
    }
    public Review(String content, String menuItemSku, Date dateOf, User reviewOwner) {
        this.content = content;
        this.menuItemSku = menuItemSku;
        this.dateOf = dateOf;
        this.reviewOwner = reviewOwner;
    }

}
