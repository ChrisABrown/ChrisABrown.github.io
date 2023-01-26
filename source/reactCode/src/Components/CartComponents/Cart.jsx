import React from "react";
import { useState } from "react";

export default function Cart() {
  const [items, setItems] = useState([""]);
  const itemsList = items.map((item, index) => {
    return (
      <li key={index}>
        {item}
        <button class="btn-add-to-cart">+</button>
        <button class="btn-remove-from-cart">-</button>
      </li>
    );
  });
  return (
    <div id="cart-page">
      <div id="cart-items-list">
        <ul id="cart-items">{setItems(itemsList)}</ul>
      </div>
    </div>
  );
}
