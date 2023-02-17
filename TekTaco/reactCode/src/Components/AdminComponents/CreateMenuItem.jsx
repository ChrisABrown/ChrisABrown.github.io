import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuItemService from "./utils.js";

const CreateMenuItem = () => {
  let navigate = useNavigate();
  const [newMenuItem, setNewMenuItem] = useState({
    id: "",
    name: "",
    image: "",
    SKU: "",
    price: "",
    inStock: "",
    description: "",
  });
  function saveNewMenuItem(e) {
    e.prevent.default();
    let menuItem = {
      name: newMenuItem.name,
      id: newMenuItem.id,
      image: newMenuItem.image,
      SKU: newMenuItem.SKU,
      price: newMenuItem.price,
      inStock: newMenuItem.inStock,
      description: newMenuItem.description,
    };
    MenuItemService.createNewMenuItem(menuItem).then((response) => {
      window.alert(response.data.message);
    });
  }

  function changeNameHandler(e) {
    setNewMenuItem({ name: e.target.value });
  }
  function changeIdHandler(e) {
    setNewMenuItem({ id: e.target.value });
  }
  function changeImageURLHandler(e) {
    setNewMenuItem({ image: e.target.value });
  }
  function changeSKUHandler(e) {
    setNewMenuItem({ SKU: e.target.value });
  }
  function changePriceHandler(e) {
    setNewMenuItem({ price: e.target.value });
  }
  function changeInStockHandler(e) {
    setNewMenuItem({ inStock: e.target.value });
  }
  function changeDescriptionHandler(e) {
    setNewMenuItem({ description: e.target.value });
  }
  return (
    <div id="item-card">
      <form>
        <div className="form-group">
          <input
            placeholder="Name"
            name="Name"
            className="form-control"
            value={newMenuItem.name}
            onChange={changeNameHandler}
            required
          ></input>
          <input
            placeholder="Id"
            name="Id"
            className="form-control"
            value={newMenuItem.id}
            onChange={changeIdHandler}
            required
          ></input>
          <input
            placeholder="Image Url"
            name="Image Url"
            className="form-control"
            value={newMenuItem.image}
            onChange={changeImageURLHandler}
            required
          ></input>
          <input
            placeholder="SKU"
            name="SKU"
            className="form-control"
            value={newMenuItem.SKU}
            onChange={changeSKUHandler}
            required
          ></input>
          <input
            placeholder="Price"
            name="Price"
            className="form-control"
            value={newMenuItem.price}
            onChange={changePriceHandler}
            required
          ></input>
          <input
            placeholder="InStock"
            name="InStock"
            className="form-control"
            value={newMenuItem.inStock}
            onChange={changeInStockHandler}
            required
          ></input>

          <input
            placeholder="Description"
            name="Description"
            className="form-control"
            value={newMenuItem.description}
            onChange={changeDescriptionHandler}
            required
          ></input>
          <div id="btn-console">
            <button
              id="btn-save"
              onClick={saveNewMenuItem.then(() => navigate("/inventory"))}
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
