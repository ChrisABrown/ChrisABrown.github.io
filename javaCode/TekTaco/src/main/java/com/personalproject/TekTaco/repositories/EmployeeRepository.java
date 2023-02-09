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
    @Query("{ACCESS_LEVEL :'?0'}")
    Employee findEmployeeByACCESS_LEVEL(String ACCESS_LEVEL);

    @Query(value = "{'ACCESS_LEVEL': '?0'}", fields = "{'name': '?0', email: '?@gmail.com'}")
    List<Employee> findAll(String ACCESS_LEVEL);

    public long count();


}
