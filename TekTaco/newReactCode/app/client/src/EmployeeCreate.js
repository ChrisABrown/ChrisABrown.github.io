import React, { useState } from "react";
import axios from "axios";

const EmployeeCreate = () => {
  const [employee, setEmployee] = useState({
    name: "",
    accessLevel: "",
    email: "",
  });

  const onSubmit = async () => {
    await axios.post("http://localhost:4000/employees", {
      employee,
    });
  };

  const handleChange = (field) => {
    return (e) =>
      setEmployee((employee) => ({
        ...employee,
        [field]: e.target.value,
      }));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <h3>Add New Employee</h3>
          <label>Name</label>
          <input
            value={employee.name}
            onChange={handleChange("name")}
            className="form-control"
          />
          <label>Access Level</label>
          <input
            value={employee.accessLevel}
            onChange={handleChange("accessLevel")}
            className="form-control"
          />{" "}
          <label>Email</label>
          <input
            value={employee.email}
            onChange={handleChange("email")}
            className="form-control"
          />{" "}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeCreate;
