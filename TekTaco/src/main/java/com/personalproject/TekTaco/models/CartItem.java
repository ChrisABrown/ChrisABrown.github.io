package com.personalproject.TekTaco.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartItem {
    private String menuItem;
    private String name;
    private Integer price;
    private Integer quantity;
    private String image;

}
