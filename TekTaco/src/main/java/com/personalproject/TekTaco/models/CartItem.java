package com.personalproject.TekTaco.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
<<<<<<< HEAD
@NoArgsConstructor
@AllArgsConstructor
=======
@AllArgsConstructor
@NoArgsConstructor
>>>>>>> 4e1a793d41195dd0254a8570020632dfdc1698ec
public class CartItem {
    private String menuItem;
    private String name;
    private Integer price;
    private Integer quantity;
    private String image;

}
