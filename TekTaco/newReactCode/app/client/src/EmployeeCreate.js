import React, { useState } from "react";
import axios from "axios";

const EmployeeCreate = () => {
  const [name, setName] = useState("");
  const [accessLevel, setAccessLevel] = useState("");

  const onSubmit = async () => {
    await axios.post("http://localhost:4000/employees", {
      data: {
        name,
        accessLevel,
      },
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
          <label>Access Level</label>
          <input
            value={accessLevel}
            onChange={(e) => setAccessLevel(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeCreate;
