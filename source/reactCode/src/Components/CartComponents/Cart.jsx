import React from "react";
import "../../Styling/Cart.css";
import NavBar from "../NavBar";
import CartItemsList from "./CartItemsList";

export default function Cart() {
  return (
    <div id="cart-page">
      <NavBar />
      <div id="cart">
        <h2>Cart</h2>
        <div id="cart-box">
          Items:
          <ul id="cart-items-list">
            <CartItemsList />
          </ul>
        </div>
      </div>
    </div>
  );
}
