import React from "react";
import MenuItemList from "./MenuItemList";
import NavBar from "./NavBar";

export default function Menu() {
  return (
    <div className="container">
      <NavBar />
      <h3>MenuItems</h3>
      <MenuItemList />
    </div>
  );
}
