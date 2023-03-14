package com.personalproject.TekTaco.models;

import java.util.ArrayList;
import java.util.List;

public class Cart {

    private String id;
    private Integer total;
    private User cartUser;

    private List<CartItem> cartItemsList = new ArrayList<CartItem>();
}
