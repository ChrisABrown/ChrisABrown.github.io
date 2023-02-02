import React from "react";
import { useState } from "react";
import "../../Styling/Cart.css";
import { useEffect } from "react";

const CartItemsList = (products) => {
  const [items, setItems] = useState();

  console.log(items);

  function addToCart() {}

  function removeFromCart() {}
  const itemsList = items.map((item) => {
    return (
      <li key={item.SKU}>
        {item.name}

        <button class="btn-remove-from-cart" onClick={removeFromCart}>
          -
        </button>
        <button class="btn-add-to-cart" onClick={addToCart}>
          -
        </button>
      </li>
    );
  });

  return <ul>{itemsList}</ul>;
};

export default CartItemsList;
