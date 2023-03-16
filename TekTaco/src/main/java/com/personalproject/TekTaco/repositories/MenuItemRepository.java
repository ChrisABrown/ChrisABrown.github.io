package com.personalproject.TekTaco.repositories;

import com.personalproject.TekTaco.models.MenuItem;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Objects;
import java.util.Optional;


@Repository
public interface MenuItemRepository extends MongoRepository<MenuItem, ObjectId> {

    @Query("{'_id':?0}")
    Optional<MenuItem> findById(ObjectId id);
    Optional<MenuItem> findMenuItemBySku(String sku);

    @Query(value = "{'_id': ?0}", delete = true)
    void deleteMenuItemBy_id(ObjectId id);

    long count();

}
