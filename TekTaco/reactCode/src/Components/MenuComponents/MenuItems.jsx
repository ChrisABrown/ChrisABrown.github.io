import React from "react";
import "../../Styling/Menu.css";

function addToCart() {}

const MenuItems = (props) => {
  const { data } = props;
  const priceWithTax = (data.price * 0.0825 + data.price).toFixed(2);
  return (
    <div id="menu-item">
      <h3 id="name">{data.name}</h3>
      <figure id="menu-image">
        <img id="image" alt="" src={data.image} height="300" width="300" />
        <figcaption id="description">{data.description}</figcaption>
      </figure>
      <label id="quantity-label">
        Quantity
        <input
          id="menu-item-quantity"
          type="number"
          min="1"
          max={data.inStock}
          placeholder="1"
        />
      </label>
      <div id="add-to-cart">
        <button className="btn-add-to-cart" onClick={addToCart}>
          add to cart
        </button>
      </div>
      <p id="price">${priceWithTax}</p>
      <hr></hr>
    </div>
  );
};

export default MenuItems;
