import React from "react";
import { useState } from "react";

export default function Cart() {
  const [items, setItems] = useState([""]);
  return <div id="cart-page">
   <div id ="cart-items-list"> items.map((item) => {
      <p>{items.}</p>
    })</div>
  </div>;
}
