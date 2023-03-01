import React from "react";
import "../../Styling/Cart.css";
import CartItemsList from "./CartItemsList";
import * as API from "../AdminComponents/apiFunctions";

export default function Cart(props) {
  props = API.getAllMenuItems();

  return (
    <div id="cart-page">
      <div id="cart">
        <h2>Cart</h2>
        <div id="cart-box">
          Items:
          <ul id="cart-items-list">
            <CartItemsList items={props} />
          </ul>
        </div>
      </div>
    </div>
  );
}
