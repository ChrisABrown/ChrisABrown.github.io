import React from "react";
import {
  updateMenuItemHandler,
  createMenuItemHandler,
  deleteMenuItemHandler,
} from "./CrudMethodHandler";

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
  return (
    <div id="item-card">
      <h4>{data.name}</h4>
      <p>{data.SKU}</p>
      <p>{data.image}</p>
      <p>{data.price}</p>
      <p>{data.inStock}</p>
      <button onClick={createMenuItem}>Edit</button>
      <button onClick={updateMenuItem}>Update</button>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
};

export default InventoryCard;
