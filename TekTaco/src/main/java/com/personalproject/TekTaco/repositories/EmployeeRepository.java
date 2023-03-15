package com.personalproject.TekTaco.repositories;

import com.personalproject.TekTaco.models.Employee;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee, String> {
    @Query("{'employeeId' :'?0'}")
    Employee findEmployeeByEmployeeId(ObjectId employeeId);

    @Query(value = "{'isAdmin': '?0'}", fields = "{'name': '?0', 'email': '?0'}")
    Set<Employee> findAll(Boolean isAdmin);

    @Query(value = "{'name': '?0', 'isAdmin':  '?0'}")
    List<Employee> findAll();

    @Query(value = "{'employeeId': ?0}", delete = true)
    void deleteEmployeeByEmployeeId(ObjectId employeeId);

    long count();


}
