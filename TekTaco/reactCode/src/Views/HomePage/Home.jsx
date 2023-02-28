import React, { useState } from "react";
import NavBar from "../../Components/NavBar";
import "../../Styling/HomePage.css";

export const Home = () => {
  const [count, setCount] = useState(0);
  function add() {
    setCount(count + 1);
  }
  function remove() {
    setCount(count - 1);
  }
  return (
    <div id="home-page">
      <h1>TekTacos</h1>
      <NavBar />
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
};
