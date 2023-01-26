import React, { useState } from "react";
import NavBar from "../../Components/NavBar";

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
      {/* 
      <button id="home-page-enter" onClick={add}>
        Add
      </button>
      <p>Hits:{count}</p>
      <button id="home-page-remove" onClick={remove}>
        Remove
      </button> */}
      <img alt="large taco" src="/pic"></img>
      <button id="btn-login">click to login</button>
      <button id="btn-cart">click to go to cart</button>
    </div>
  );
};
