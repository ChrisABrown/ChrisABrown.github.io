package com.personalproject.TekTaco;


import com.personalproject.TekTaco.controllers.EmployeeController;
import com.personalproject.TekTaco.controllers.MenuItemController;
import com.personalproject.TekTaco.repositories.MenuItemRepository;
import com.personalproject.TekTaco.services.MenuItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@SpringBootApplication
@EnableMongoRepositories
public class TekTacoApplication {



    public static void main(String[] args) {
        SpringApplication.run(TekTacoApplication.class, args);
    }





}


