import React, { useState, Outlet, Link } from "react";
import "../../Styling/HomePage.css";

export default function Home() {
  return (
    <div id="home-page">
      <div id="navbar-container">{/* <NavBar /> */}</div>
      <h1>TekTacos</h1>
      <figure id="splash-image">
        <img
          className="taco"
          src="https://cdn4.iconfinder.com/data/icons/food-delivery-21/64/taco-2-512.png"
          alt="Corn and flour tortilla"
        />
      </figure>
      <button id="btn-login">click to login</button>
      <button id="btn-cart">click to go to cart</button>
    </div>
  );
}
