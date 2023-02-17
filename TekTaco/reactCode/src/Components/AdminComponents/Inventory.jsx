import React from "react";
import { useEffect, useState } from "react";
import MenuItemService from "./utils";
import InventoryCard from "./InventoryCard";
import "../../Styling/Inventory.css";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    MenuItemService.getAllMenuItems().then((items) => setInventory(items.data));
  }, []);

  const cards = inventory.map((product) => {
    return <InventoryCard key={product.id} data={product} />;
  });
  return (
    <div id="inventory-page">
      <h1 id="inventory-title">TekTaco Inventory</h1>
      <div id="cards-container">{cards}</div>
    </div>
  );
};

export default Inventory;
