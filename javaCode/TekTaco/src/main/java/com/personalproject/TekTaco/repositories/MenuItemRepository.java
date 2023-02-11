package com.personalproject.TekTaco.repositories;

import com.personalproject.TekTaco.models.MenuItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface MenuItemRepository extends MongoRepository<MenuItem, String> {
    @Query("{id: '?0'}")
    MenuItem findItemById(String id);
    @Query("{name:'?0'}")
    MenuItem findItemByName(String name);
    @Query(value="{productType:'?0'}", fields = "{'name' :1, 'inStock': 1}")
    List<MenuItem> findAll(String productType);

    public long count();

}
