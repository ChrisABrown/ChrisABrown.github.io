import React from "react";
import { Home } from "../Views/HomePage/Home";
import Menu from "./Menu";
import Login from "./Login";
import Cart from "./Cart";
import { Routes, Route } from "react-router-dom";

export default function ProjectRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Home />}>
        home
      </Route>
      <Route path="/menu" element={<Menu />}>
        menu
      </Route>
      <Route path="/login" element={<Login />}>
        login
      </Route>
      <Route path="/cart" element={<Cart />}>
        cart
      </Route>
    </Routes>
  );
}
