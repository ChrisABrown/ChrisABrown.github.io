import React from "react";
import { useState } from "react";
import "../../Styling/Cart.css";

const CartItemsList = (items) => {
  console.log(items);
  const [item, setItem] = useState([]);
  console.log();

  function addToCart(product) {
    if (items["SKU"] === product.SKU) setItem(product);
  }

  function removeFromCart() {}
  const { itemsList } = items.then((item) => {
    item.data;
  });
  // return (
  //   <li key={item.SKU}>
  //     {item.name}

  //     <button class="btn-remove-from-cart" onClick={removeFromCart}>
  //       -
  //     </button>
  //     <button class="btn-add-to-cart" onClick={addToCart}>
  //       +
  //     </button>
  //   </li>
  // );

  return (
    <div>
      <h1>Cart</h1>
      {/* <ul>{itemsList}</ul> */}
    </div>
  );
};

export default CartItemsList;
