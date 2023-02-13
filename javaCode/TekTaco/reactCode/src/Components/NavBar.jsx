import React from "react";
import "../Styling/NavBar.css";

function NavBar() {
  return (
    <div id="Navbar">
      <ul name="navbar" id="navbar">
        <li>
          <a name="home-page" href="/">
            Home
          </a>
        </li>
        <li>
          <a name="login-page" href="/login">
            Login
          </a>
        </li>
        <li>
          <a name="menu-page" href="/menu">
            Menu
          </a>
        </li>
        <li>
          <a name="cart-page" href="/cart">
            <img alt="cart" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
