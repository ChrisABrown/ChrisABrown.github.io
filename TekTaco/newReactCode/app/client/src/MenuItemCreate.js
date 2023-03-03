import React, { useState } from "react";
import axios from "axios";

const MenuItemCreate = () => {
  const [menuItem, setMenuItem] = useState("");

  const onSubmit = async (e) => {
    e.prevent.default();
    await axios.post("http://localhost:4004", {
      menuItem,
    });
    setMenuItem("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>MenuItem</label>
          <input
            value={menuItem}
            onChange={(e) => setMenuItem(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default MenuItemCreate;
