package com.personalproject.TekTaco.repositories;

import com.personalproject.TekTaco.models.Order;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface OrderRepository extends MongoRepository<Order, ObjectId> {
}
