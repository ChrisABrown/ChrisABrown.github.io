package com.personalproject.TekTaco.models;

import java.util.ArrayList;
import java.util.List;

public class MenuItemDefinition implements MenuItemCalibrate{
    private String name;
    private Integer price;
    private String description;
    private final List<ReviewDefinition> reviewDefinitions = new ArrayList<>();


}
