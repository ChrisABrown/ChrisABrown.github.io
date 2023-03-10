import axios from "axios";
import React, { useState, useEffect } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState({});

  const fetchEmployees = async () => {
    const res = await axios.get("http://localhost:4000/employees");
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const renderedEmployees = Object.values(employees).map((employee) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={employee.id}
      >
        <div className="card-body">
          <h5>{employee.name}</h5>
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedEmployees}
    </div>
  );
};

export default EmployeeList;
