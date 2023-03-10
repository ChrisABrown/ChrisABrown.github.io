import React from "react";
import InventoryList from "./InventoryList";
import MenuItemCreate from "./MenuItemCreate";
import MenuItemList from "./MenuItemList";
import NavBar from "./NavBar";

const InventoryPage = () => {
  return (
    <div className="container">
      <NavBar />
      <h1>Inventory</h1>
      <MenuItemCreate />
      <hr />
      <h1>Current MenuItems: </h1>
      <InventoryList />
    </div>
  );
};

export default InventoryPage;
