import React, { useState } from "react";
import axios from "axios";

const MenuItemCreate = () => {
  const [menuItem, setMenuItem] = useState({
    name: "",
    price: 0,
    image: "",
    inStock: 0,
    productType: "",
    description: "",
  });

  const onSubmit = async () => {
    await axios.post("http://localhost:4004/menuItems", {
      menuItem,
    });
  };

  const handleChange = (field) => {
    return (e) =>
      setMenuItem((menuItem) => ({
        ...menuItem,
        [field]: e.target.value,
      }));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <h3>Add New MenuItem</h3>
          <label>Name</label>
          <input
            value={menuItem.name}
            onChange={handleChange("name")}
            className="form-control"
          />
          <label>Price</label>
          <input
            value={menuItem.price}
            onChange={handleChange("price")}
            className="form-control"
          />
          <label>Image URL</label>
          <input
            value={menuItem.image}
            onChange={handleChange("image")}
            className="form-control"
          />{" "}
          <label>How many in Stock?</label>
          <input
            value={menuItem.inStock}
            onChange={handleChange("inStock")}
            className="form-control"
          />
          <label>Description</label>
          <input
            value={menuItem.description}
            onChange={handleChange("description")}
            className="form-control"
          />{" "}
          <label>Product Type</label>
          <input
            value={menuItem.productType}
            onChange={handleChange("productType")}
            className="form-control"
          />{" "}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default MenuItemCreate;
