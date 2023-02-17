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
      <form>
        <div className="form-group">
          <input placeholder={product.data.name}></input>
          <figure>
            <img
              id="menuItem-img"
              alt="menuItem pic"
              src={product.data.image}
              height={150}
              width={150}
            />
            <figcaption>
              <input placeholder={product.data.image}></input>
            </figcaption>
          </figure>
          <p>SKU: {product.data.sku}</p>
          <input placeholder="edit SKU"></input>
          <p id="menuItem-price">Current Price: {product.data.price}</p>
          <input placeholder="edit price"></input>
          <p id="menuItem-inStock">Current InStock: {product.data.inStock}</p>
          <input placeholder="edit inStock"></input>
          <p id="menuItem-description">
            Current Description: {product.data.description}
          </p>
          <input placeholder="edit description"></input>
          <div id="btn-console">
            <button id="btn-update" onClick={updateMenuItem}>
              Update
            </button>
            <button id="btn-delete" onClick={deleteItem}>
              Delete
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InventoryCard;
