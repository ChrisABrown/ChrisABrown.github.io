package com.personalproject.TekTaco.repositories;

import com.personalproject.TekTaco.models.MenuItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface MenuItemRepository extends MongoRepository<MenuItem, String> {

    @Query(value = "{id: '?0'}", fields = "{'name' :1," + " 'inStock': 1," + " 'price': 1," + " 'productType': 1," + " 'description': 1," + " 'SKU':  1," + " 'image': 1}")
    Optional<MenuItem> findById(String id);

    @Query(value = "{name:'?0'}", fields = "{'name' :1," + " 'inStock': 1," + " 'price': 1," + " 'productType': 1," + " 'description': 1," + " 'SKU':  1," + " 'image': 1}")
    MenuItem findMenuItemByName(String name);

    @Query(value = "{productType:'?0'}", fields = "{'name' :1," + " 'inStock': 1," + " 'price': 1," + " 'productType': 1," + " 'description': 1," + " 'SKU':  1," + " 'image': 1}")
    List<MenuItem> findAll(String productType);

    long count();

}
