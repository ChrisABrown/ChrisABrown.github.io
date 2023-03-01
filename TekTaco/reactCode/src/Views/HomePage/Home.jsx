import React from "react";
import "../../Styling/HomePage.css";

export default function Home() {
  return (
    <div id="home-page">
      <h1>TekTacos</h1>
      <figure id="splash-image">
        <img
          className="taco"
          src="https://cdn4.iconfinder.com/data/icons/food-delivery-21/64/taco-2-512.png"
          alt="Corn and flour tortilla"
        />
      </figure>
    </div>
  );
}
