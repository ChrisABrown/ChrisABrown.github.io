import React from "react";
import { useState } from "react";
import "../../Styling/Cart.css";

const CartItemsList = () => {
  const [items, setItems] = useState([
    "chocolate taco: 5.99",
    "vanilla taco: 4.99",
  ]);

  function addToCart() {
    setItems(items);
  }

  function removeFromCart() {
    setItems(items);
  }
  const itemsList = items.map((item, index) => {
    return (
      <li key={index}>
        {item}

        <button class="btn-remove-from-cart" onClick={removeFromCart}>
          -
        </button>
      </li>
    );
  });
  return <li>{itemsList}</li>;
};

export default CartItemsList;
