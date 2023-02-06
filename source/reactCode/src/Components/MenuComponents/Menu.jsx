import React from "react";
import Entrees from "./Entrees";
import inventory from "../../Assets/Inventory.json";
import "../../Styling/Menu.css";
import NavBar from "../NavBar";

export default function Menu(props) {
  props = inventory;

  const menuList = props.inventory.map((product) => (
    <Entrees key={product.SKU} props={product} />
  ));

  return (
    <div id="menu-page">
      <NavBar />
      <section id="menu-box">{menuList}</section>
    </div>
  );
}
