import React, { useState } from "react";
import axios from "axios";

const EmployeeCreate = () => {
  const [name, setName] = useState("");
  const [adminAccess, setAdminAccess] = useState(false);

  const onSubmit = async () => {
    await axios.post("http://localhost:4000/employees", {
      name,
    });

    setName("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <h3>Add New Employee</h3>
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
          <label>Give Admin Access?</label>
          <input
            value={adminAccess}
            type="checkbox"
            onChange={() => setAdminAccess(true)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeCreate;
