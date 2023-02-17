import React from "react";
import { Home } from "../Views/HomePage/Home";
import Menu from "../Components/MenuComponents/Menu";
import Login from "../Components/LoginComponents/Login";
import Cart from "../Components/CartComponents/Cart";
import { Routes, Route } from "react-router-dom";
import Inventory from "./AdminComponents/Inventory";
import CreateMenuItem from "./AdminComponents/CreateMenuItem";

export default function ProjectRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Home />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/add-new-menuItem" element={<CreateMenuItem />}></Route>
    </Routes>
  );
}
