import React from "react";
import { useEffect, useState } from "react";
import { getAllMenuItems } from "./utils";
import InventoryCard from "./InventoryCard";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    getAllMenuItems().then((items) => setInventory(items));
  }, []);

  const cards = inventory.map((product) => {
    return <InventoryCard key={product.id} data={product} />;
  });
  return (
    <div id="inventory-page">
      <h1>TekTaco Inventory</h1>
      <div id="cards-container">{cards}</div>
    </div>
  );
};

export default Inventory;
