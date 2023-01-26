import React from "react";
import { useState } from "react";
import NavBar from "../NavBar";

export default function Cart() {
  const [items, setItems] = useState([
    "chocolate taco: 5.99",
    "vanilla taco: 4.99",
  ]);
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
      <NavBar />
      <div id="cart">
        <h2>Cart</h2>
        <div id="cart-items-list">
          Items:
          <ul id="cart-items">{itemsList}</ul>
        </div>
      </div>
    </div>
  );
}
