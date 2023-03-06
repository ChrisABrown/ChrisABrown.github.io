import React from "react";
import axios from "axios";

const fetchMenuItems = async (e) => {
  e.prevent.default();
  await axios.get(`http://localhost:8080/menuItems`);
};

const MenuItemList = () => {
  return <div></div>;
};

export default MenuItemList;
