import { Link, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Menu from "./Menu";
import InventoryPage from "./InventoryPage";
import AdminPage from "./AdminPage";
import CartPage from "./CartPage";
// import AuthContextProvider from "./store/auth-context";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />

        <Route
          path="/login"
          element={<AdminPage />}
          // element={<AuthContextProvider>{/* <Login /> */}</AuthContextProvider>}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        {/* <Route path="/add-new-menuItem" element={<CreateNewMenuItem />} /> */}
      </Routes>
    </div>
  );
}
