package com.personalproject.TekTaco.repositories;

import com.personalproject.TekTaco.models.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee, String> {
    @Query("{id :'?0'}")
    Employee findEmployeeById(Integer id);
    @Query("{accessLevel :'?0'}")
    Employee findEmployeeByAccessLevel(String accessLevel);

    @Query(value = "{'accessLevel': '?0'}", fields = "{'name': '?0', email: '?@gmail.com'}")
    List<Employee> findAll(String accessLevel);

    public long count();


}
