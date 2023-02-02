import React from "react";
import "../../Styling/Cart.css";
import NavBar from "../NavBar";
import CartItemsList from "./CartItemsList";
import products from "../../Assets/Inventory.json";

export default function Cart(props) {
  props = products;
  return (
    <div id="cart-page">
      <NavBar />
      <div id="cart">
        <h2>Cart</h2>
        <div id="cart-box">
          Items:
          <ul id="cart-items-list">
            <CartItemsList items={products} />
          </ul>
        </div>
      </div>
    </div>
  );
}
