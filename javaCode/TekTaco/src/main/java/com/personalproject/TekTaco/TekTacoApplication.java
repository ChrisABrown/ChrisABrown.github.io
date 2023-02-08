package com.personalproject.TekTaco;

import com.personalproject.TekTaco.models.MenuItem;
import com.personalproject.TekTaco.repositories.MenuItemRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.List;

@SpringBootApplication
@EnableMongoRepositories
public class TekTacoApplication {


    public static void main(String[] args) {
        SpringApplication.run(TekTacoApplication.class, args);
    }


}


