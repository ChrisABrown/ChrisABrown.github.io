/* eslint-disable default-case */
import React from "react";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import MenuItemService from "./utils.js";

let lineBreak = <br />;
const newMenuItem = {
  id: "",
  name: "",
  image: "",
  SKU: "",
  price: "",
  inStock: "",
  description: "",
};

const reducerInputChange = (state, action) => {
  switch (action.type) {
    case "HANDLE INPUT TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};

const CreateMenuItem = () => {
  let navigate = useNavigate();
  const [menuItem, dispatch] = useReducer(reducerInputChange, newMenuItem);

  const handleInputChange = (e) => {
    dispatch({
      type: "HANDLE INPUT TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const saveNewMenuItem = (e) => {
    e.prevent.default();
    MenuItemService.createNewMenuItem(newMenuItem).then((response) => {
      window.alert(response.data.message);
    });
  };

  function handleSubmit() {
    alert("Menu Item was created with id: " + newMenuItem.id);
  }
  return (
    <div id="cards-container2">
      <h1>Create New Menu Item</h1>
      <div id="item-card2">
        <form action="">
          <div className="form-group">
            <label>Name:</label>
            {lineBreak}
            <input
              name="name"
              type="text"
              className="form-control"
              value={menuItem.name}
              onChange={(e) => handleInputChange(e)}
              required
            ></input>
            {lineBreak}
            <label>Id:</label>
            {lineBreak}
            <input
              name="id"
              type="number"
              className="form-control"
              value={menuItem.id}
              onChange={(e) => handleInputChange(e)}
              required
            ></input>
            {lineBreak}
            <label>Image URL:</label>
            {lineBreak}
            <input
              name="image"
              type="url"
              className="form-control"
              value={menuItem.image}
              onChange={(e) => handleInputChange(e)}
              required
            ></input>
            {lineBreak}
            <label>SKU:</label>
            {lineBreak}
            <input
              name="SKU"
              type="text"
              className="form-control"
              value={menuItem.SKU}
              onChange={(e) => handleInputChange(e)}
              required
            ></input>
            {lineBreak}
            <label>Price:</label>
            {lineBreak}
            <input
              name="price"
              type="number"
              className="form-control"
              value={menuItem.price}
              onChange={(e) => handleInputChange(e)}
              required
            ></input>
            {lineBreak}
            <label># in Stock:</label>
            {lineBreak}
            <input
              name="inStock"
              type="number"
              className="form-control"
              value={menuItem.inStock}
              onChange={(e) => handleInputChange(e)}
              required
            ></input>
            {lineBreak}
            <label>Description:</label>
            {lineBreak}
            <textarea
              name="description"
              className="form-control"
              value={menuItem.description}
              onChange={(e) => handleInputChange(e)}
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
    </div>
  );
};

export default CreateMenuItem;
