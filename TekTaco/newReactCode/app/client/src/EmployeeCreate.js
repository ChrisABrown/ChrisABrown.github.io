import React, { useState } from "react";
import axios from "axios";

const EmployeeCreate = () => {
  const [firstName, setFirstName] = useState("");

  const onSubmit = async (e) => {
    // e.prevent.default();
    await axios.post("http://localhost:4000/employees", {
      firstName,
    });
    setFirstName("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Create Employee</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeCreate;
