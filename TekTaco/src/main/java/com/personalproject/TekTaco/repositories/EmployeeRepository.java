package com.personalproject.TekTaco.repositories;

import com.personalproject.TekTaco.models.Employee;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee, ObjectId> {

    @Query(value = "{'employeeId': '?0'}")
    Employee findEmployeeById(ObjectId employeeId);
    @Query(value = "{'isAdmin': '?0'}")
    Set<Employee> findAdminEmployees(Boolean isAdmin);



}
