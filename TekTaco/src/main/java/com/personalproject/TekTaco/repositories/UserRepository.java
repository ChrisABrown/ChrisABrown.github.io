package com.personalproject.TekTaco.repositories;

import com.personalproject.TekTaco.models.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee, String> {

    @Query(value = "{'employeeId': '?0'}")
    Employee findEmployeeById(String employeeId);

    @Query("{'isAdmin': true}")
    List<Employee> findAdminEmployees();


}
