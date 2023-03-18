import React, { useState, useEffect } from "react";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const fetchEmployees = async () => {
    const URL = "http://localhost:8080/";
    try {
      const response = await fetch(`${URL}admin`, {
        cache: "default",
      });

      return await response.json();
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    fetchEmployees().then((employees) => {
      setEmployees(employees);
    });
  }, []);

  const renderedEmployees = Object.values(employees).map((employee) => {
    const staff = employee;
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={staff.name}
      >
        <div className="card-body">
          <h5>{staff.name}</h5>
          <h6>{staff.email}</h6>
          <h6>{staff.accessLevel}</h6>
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedEmployees}
    </div>
  );
}
