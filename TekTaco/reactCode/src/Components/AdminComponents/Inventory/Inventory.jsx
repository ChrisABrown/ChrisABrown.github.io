import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../Styling/Inventory.css";
import * as API from "../apiFunctions.js";
import InventoryCard from "./InventoryCard";

export default function Inventory() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    API.getAllMenuItems().then((items) => setInventory(items.data));
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
}
