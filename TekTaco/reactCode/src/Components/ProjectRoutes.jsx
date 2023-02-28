import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Views/HomePage/Home";
import CreateNewMenuItem from "./AdminComponents/Inventory/CreateMenuItem";
import Inventory from "./AdminComponents/Inventory/Inventory";
import Login from "./AdminComponents/Login/Login";
import Cart from "./CartComponents/Cart";
import Menu from "./MenuComponents/Menu";
import { useState } from "react";

const linkList = [
  { Homepage: Home },
  { MenuPage: Menu },
  { InventoryPage: Inventory },
  { CartPage: Cart },
  { LoginPage: Login },
  { CreateNewMenuItemPage: CreateNewMenuItem },
];

const ProjectRoutes = () => {
  const [currentLinkInList, setCurrentLinkInList] = useState(0);

  const renderLink = () => {
    const LinkPanel = linkList[currentLinkInList].Homepage;
    return <LinkPanel />;
  };

  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/add-new-menuItem" element={<CreateNewMenuItem />}></Route>
    </Routes>
  );
};
