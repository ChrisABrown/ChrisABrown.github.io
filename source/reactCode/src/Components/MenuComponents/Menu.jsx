import React from "react";
import MenuList from "./MenuList";
import inventory from "../../Assets/Inventory.json";

export default function Menu({ inventory }) {
  function addToCart() {}
  function increment() {}
  function decrement() {}

  return (
    <div id="menu-page">
      <MenuList />
    </div>
  );
}
