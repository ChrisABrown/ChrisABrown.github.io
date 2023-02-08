package repositories;

import models.MenuItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface MenuItemRepository extends MongoRepository<MenuItem, String> {
    @Query("{name:'?0'}")
    MenuItem findItemByName(String name);
    @Query(value="{productType:'?0'}", fields = "{'name' :1, 'inStock': 1}")
    List<MenuItem> findAll(String productType);

    public long count();

}
