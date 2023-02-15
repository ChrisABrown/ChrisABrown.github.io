import React from "react";
import {
  updateMenuItemHandler,
  createMenuItemHandler,
  deleteMenuItemHandler,
} from "./CrudMethodHandler";
import "../../Styling/Inventory.css";

function updateMenuItem(e) {
  updateMenuItemHandler(e.target.value);
}
function deleteItem() {
  deleteMenuItemHandler();
}
function createMenuItem(e) {
  createMenuItemHandler(e.target.value);
}

const InventoryCard = (data) => {
  const product = data;

  return (
    <div id="item-card">
      <h4>{product.data.name}</h4>
      <p>{product.data.sku}</p>
      <img
        id="menuItem-img"
        alt="menuItem pic"
        src={product.data.image}
        height={100}
        width={100}
      />
      <p id="menuItem-price">Current Price: {product.data.price}</p>
      <input placeholder="edit price"></input>
      <p id="menuItem-inStock">Current InStock: {product.data.inStock}</p>
      <input placeholder="edit inStock"></input>
      <div id="btn-console">
        <button id="btn-edit" onClick={createMenuItem}>
          Edit
        </button>
        <button id="btn-update" onClick={updateMenuItem}>
          Update
        </button>
        <button id="btn-delete" onClick={deleteItem}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default InventoryCard;
