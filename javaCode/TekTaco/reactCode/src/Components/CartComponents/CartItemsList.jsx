import React from "react";
import { useState } from "react";
import "../../Styling/Cart.css";

const CartItemsList = (items) => {
  items = items.items;

  const [item, setItem] = useState([]);
  console.log();

  function addToCart(product) {
    if (items["SKU"] === product.SKU) setItem(product);
  }

  function removeFromCart() {}
  const itemsList = items.map((item) => {
    return (
      <li key={item.SKU}>
        {item.name}

        <button class="btn-remove-from-cart" onClick={removeFromCart}>
          -
        </button>
        <button class="btn-add-to-cart" onClick={addToCart}>
          +
        </button>
      </li>
    );
  });

  return <ul>{itemsList}</ul>;
};

export default CartItemsList;
