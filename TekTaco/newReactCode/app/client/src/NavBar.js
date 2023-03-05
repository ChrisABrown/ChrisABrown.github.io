import React from "react";

const NavBar = () => {
  return (
    <nav id="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand" href="/">
        <img
          className="taco"
          src="https://cdn4.iconfinder.com/data/icons/food-delivery-21/64/taco-2-512.png"
          alt="Corn and flour tortilla"
          width={70}
          height={70}
        />
        TekTaco
      </a>

      <a href="/menu">Menu</a>
      <a href="/login">Login</a>
      <a href="/cart">Cart</a>
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
