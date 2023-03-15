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
public interface MenuItemRepository extends MongoRepository<MenuItem, String> {

    @Query("{'_id':?0}")
    Optional<MenuItem> findById(ObjectId id);

    @Query("{'name':?0}")
    MenuItem findMenuItemByName(String name);
    @Query("{'sku': ?0}")
    Optional<MenuItem> findMenuItemBySku(String sku);

    @Query(value = "{'productType':?0}", sort = "{'productType':  1}", fields = "{'name' :1," + " 'inStock': 1," + " 'price': 1," + " 'productType': 1," + " 'description': 1," + " 'SKU':  1," + " 'image': 1}")
    List<MenuItem> findAll(String productType);

    @Query(value = "{'_id': ?0}", delete = true)
    void deleteMenuItemBy_id(ObjectId id);

    long count();

}
