import React, { useEffect, useState } from "react";
import MenuItems from "./MenuItems";
import "../../Styling/Menu.css";
import NavBar from "../NavBar";
import MenuItemService from "../AdminComponents/utils.js";

export default function Menu() {
  const [entrees, setEntrees] = useState([]);
  const [sides, setSides] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const getEntreeData = () => {
    MenuItemService.getAllMenuItemsByProductType("Entree").then((menuItem) =>
      setEntrees(menuItem.data)
    );
  };
  const getSideData = () => {
    MenuItemService.getAllMenuItemsByProductType("Side").then((menuItem) =>
      setSides(menuItem.data)
    );
  };
  const getDrinkData = () => {
    MenuItemService.getAllMenuItemsByProductType("Drink").then((menuItem) =>
      setDrinks(menuItem.data)
    );
  };

  useEffect(() => {
    const funnelAPIData = () => {
      getEntreeData();
      getSideData();
      getDrinkData();
    };
    funnelAPIData();
  }, []);

  const entreeList = entrees.map((entree) => {
    return <MenuItems key={entree.id} data={entree} />;
  });
  const sideList = sides.map((side) => {
    return <MenuItems key={side.id} data={side} />;
  });
  const drinkList = drinks.map((drink) => {
    return <MenuItems key={drink.id} data={drink} />;
  });

  return (
    <div id="menu-page">
      <NavBar />
      <section id="Entrees">
        <h3>Entrees</h3>
        <div className="menu-box">{entreeList}</div>
      </section>
      <section id="Sides">
        <h3>Sides</h3>
        <div className="menu-box">{sideList}</div>
      </section>
      <section id="Drinks">
        <h3>Drinks</h3>
        <div className="menu-box">{drinkList}</div>
      </section>
    </div>
  );
}
