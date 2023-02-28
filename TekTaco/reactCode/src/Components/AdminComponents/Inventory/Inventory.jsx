import React from "react";
import { useEffect, useState } from "react";
import MenuItemService from "../apiFunctions";
import InventoryCard from "./InventoryCard";
import "../../Styling/Inventory.css";
import { Link } from "react-router-dom";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    MenuItemService.getAllMenuItems().then((items) => setInventory(items.data));
  }, []);

  const cards = inventory.map((product) => {
    return <InventoryCard key={product._id} data={product} />;
  });
  return (
    <div id="inventory-page">
      <h1 id="inventory-title">TekTaco Inventory</h1>
      <div id="btn-create-new-menuItem">
        <Link to="/add-new-menuItem">
          <button>Create New Menu Item</button>
        </Link>
      </div>
      <div id="cards-container">{cards}</div>
    </div>
  );
};

export default Inventory;
