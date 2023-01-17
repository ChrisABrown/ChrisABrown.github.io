import React, { useState } from "react";

export const Home = () => {
  const [count, setCount] = useState("");
  function enter() {
    setCount(count++);
  }
  return (
    <div id="home-page">
      <h1>Welcome to My Page</h1>
      <button id="home-page-enter" onClick={enter}>
        Enter
      </button>
    </div>
  );
};
