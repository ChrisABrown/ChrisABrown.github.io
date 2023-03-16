package com.personalproject.TekTaco.repositories;

import com.personalproject.TekTaco.models.MenuItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface MenuItemRepository extends MongoRepository<MenuItem, String> {

    @Query("{'_id':?0}")
    Optional<MenuItem> findById(String id);
    Optional<MenuItem> findMenuItemBySku(String sku);

    long count();

}
