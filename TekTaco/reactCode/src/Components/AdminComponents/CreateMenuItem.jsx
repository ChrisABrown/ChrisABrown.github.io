import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuItemService from "./utils.js";

const CreateMenuItem = () => {
  let navigate = useNavigate();
  let lineBreak = <br></br>;
  const [newMenuItem, setNewMenuItem] = useState({
    id: "",
    name: "",
    image: "",
    SKU: "",
    price: "",
    inStock: "",
    description: "",
  });
  const saveNewMenuItem = (e) => {
    e.prevent.default();
    MenuItemService.createNewMenuItem(newMenuItem).then((response) => {
      window.alert(response.data.message);
    });
  };

  const inputsHandler = (e) => {
    setNewMenuItem(() => ({
      ...newMenuItem,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSubmit(e) {
    alert("Menu Item was created with id: " + newMenuItem.id);
    e.prevent.default();
  }
  return (
    <div id="item-card">
      <form onSubmit={handleSubmit} action="">
        <div className="form-group">
          <input
            placeholder="Name"
            name="Name"
            type="text"
            className="form-control"
            value={newMenuItem.name}
            onChange={(e) => {
              setNewMenuItem(e.target.value);
              console.log(e.target.value);
            }}
            required
          ></input>
          {lineBreak}
          <input
            placeholder="Id"
            name="Id"
            type="number"
            className="form-control"
            value={newMenuItem.id}
            onChange={inputsHandler}
            required
          ></input>
          {lineBreak}
          <input
            placeholder="Image Url"
            name="Image Url"
            type="url"
            className="form-control"
            value={newMenuItem.image}
            onChange={inputsHandler}
            required
          ></input>
          {lineBreak}
          <input
            placeholder="SKU"
            name="SKU"
            type="text"
            className="form-control"
            value={newMenuItem.SKU}
            onChange={inputsHandler}
            required
          ></input>
          {lineBreak}
          <input
            placeholder="Price"
            name="Price"
            type="number"
            className="form-control"
            value={newMenuItem.price}
            onChange={inputsHandler}
            required
          ></input>
          {lineBreak}
          <input
            placeholder="InStock"
            name="InStock"
            type="number"
            className="form-control"
            value={newMenuItem.inStock}
            onChange={inputsHandler}
            required
          ></input>
          {lineBreak}
          <textarea
            placeholder="Description"
            name="Description"
            className="form-control"
            value={newMenuItem.description}
            onChange={inputsHandler}
            required
          ></textarea>
          {lineBreak}

          <div id="btn-console">
            <button
              id="btn-save"
              type="submit"
              onClick={saveNewMenuItem}
              onClickCapture={() => navigate("/inventory")}
            >
              Save
            </button>
            <button id="btn-delete" onClick={() => navigate("/inventory")}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateMenuItem;
