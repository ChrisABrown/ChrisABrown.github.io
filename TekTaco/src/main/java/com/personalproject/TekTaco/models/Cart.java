package com.personalproject.TekTaco.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "Carts")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cart {

    private String id;
    private Integer total;
    private User cartUser;

    private List<CartItem> cartItemsList = new ArrayList<CartItem>();
}
