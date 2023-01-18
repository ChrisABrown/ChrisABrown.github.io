import React from "react";
import PropTypes from "prop-types";

function NavBar(props) {
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
            Cart
          </a>
        </li>
      </ul>
    </div>
  );
}

NavBar.propTypes = {};

export default NavBar;
