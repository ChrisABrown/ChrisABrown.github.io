import React, { useEffect, useState } from "react";
import ReviewCreate from "./ReviewCreate";
import ReviewList from "./ReviewList";

export default function MenuItemList() {
  const [menuItems, setMenuItems] = useState({});
  const fetchMenuItems = async () => {
    const URL = "http://localhost:8080/";
    try {
      const response = await fetch(`${URL}menuItems`, {
        cache: "default",
      });
      return await response.json();
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    fetchMenuItems().then((items) => {
      setMenuItems(items.data);
    });
  }, []);

  const renderedMenuItems = Object.values(menuItems).map((item) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={item._id}
      >
        <div className="card-body">
          <h3>{item.name}</h3>
          <h6>${item.price.toFixed(2)}</h6>
          <p>{item.description}</p>
          <img src={item.image} height={200} width={200} alt="food images" />
          <ReviewList key={item.sku} sku={item.sku} />
          <ReviewCreate key={item._id} sku={item.sku} />
        </div>
      </div>
    );
  });
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedMenuItems}
    </div>
  );
}
