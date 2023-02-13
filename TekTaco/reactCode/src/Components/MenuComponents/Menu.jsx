import React, { useEffect, useState } from "react";
import Entrees from "./Entrees";
// import inventory from "../../Assets/Inventory.json";
import "../../Styling/Menu.css";
import NavBar from "../NavBar";
import axios from "axios";

export default function Menu(props) {
  const [loading, setLoading] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const loadMenuItems = async () => {
      setLoading(true);

      const response = await axios.get("https://localhost:8080/menu");
      setMenuItems(response.data);

      setLoading(false);
    };
    loadMenuItems();
  }, []);

  const menuList = menuItems.map((product) => (
    <Entrees key={product.SKU} props={product} />
  ));

  return (
    <div id="menu-page">
      <NavBar />
      <section id="menu-box">{menuList}</section>
    </div>
  );
}
