import React from "react";
import { Home } from "../Views/HomePage/Home";
import Menu from "../Components/Pages/Menu";
import Login from "../Components/Pages/Login";
import Cart from "../Components/Pages/Cart";
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
