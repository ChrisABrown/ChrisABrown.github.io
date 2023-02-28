import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../Views/HomePage/Home";
import CreateNewMenuItem from "./AdminComponents/Inventory/CreateMenuItem";
import Inventory from "./AdminComponents/Inventory/Inventory";
import Login from "./AdminComponents/Login/Login";
import "./App.css";
import Cart from "./CartComponents/Cart";
import Menu from "./MenuComponents/Menu";
import "../Styling/NavBar.css";
import loadable from "@loadable/component"


const NavBar = () => {
  return (
    <div id="navBar-container">
    <nav id="Navbar">
      <ul name="navbar" id="navbar">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/menu'>Menu</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
      </ul>
    </nav>
    <hr/>
      <Outlet />
      </div>
  );
};

const LoadablePage = loadable((menuItems) => import(`./menu`), {
  fallback: <div> Page is Loading...</div>,
  cacheKey: (menuItems) =>
})

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="login" element={<Login />}/>
        <Route path="cart" element={<Cart />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="add-new-menuItem" element={<CreateNewMenuItem />} />
      </Route>
    </Routes>
  );
}

export default App;
