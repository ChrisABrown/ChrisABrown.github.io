import { Link, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./App.css";
import CreateNewMenuItem from "./Components/AdminComponents/Inventory/CreateMenuItem";
import Inventory from "./Components/AdminComponents/Inventory/Inventory";
import Login from "./Components/AdminComponents/Login/Login";
import Cart from "./Components/CartComponents/Cart";
import Menu from "./Components/MenuComponents/Menu";
import Home from "./Views/HomePage/Home";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/add-new-menuItem" element={<CreateNewMenuItem />} />
      </Routes>
      ;
    </div>
  );
}
