package com.personalproject.TekTaco.repositories;

import com.personalproject.TekTaco.models.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee, String> {
    @Query("{'employeeId' :'?0'}")
    Employee findEmployeeByEmployeeId(Integer employeeId);
    @Query("{'accessLevel' :'?0'}")
    Employee findEmployeeByAccessLevel(String accessLevel);

    @Query(value = "{'accessLevel': '?0'}", fields = "{'name': '?0', 'email': '?@gmail.com'}")
    List<Employee> findAll(String accessLevel);

    @Query(value="{'employeeId': ?0}", delete = true)
    void deleteEmployeeByEmployeeId(Integer employeeId);
    public long count();


}
