import React, { useEffect, useState } from "react";

export default function InventoryList() {
  const [menuItems, setMenuItems] = useState([]);
  const fetchMenuItems = async () => {
    const URL = "http://localhost:4004/";
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
      setMenuItems(items);
    });
  }, []);

  const renderedMenuItems = Object.values(menuItems).map((item) => {
    const product = item.menuItem;

    console.log(product.price);
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={product.sku}
      >
        <div className="card-body">
          <h3>{product.name}</h3>
          <h6>${product.price.toFixed(2)}</h6>
          <img src={product.image} height={200} width={200} alt="food images" />
          <p>{product.description}</p>
          <p>{product.inStock}</p>
          <p>{product.productType}</p>
          <button>Update</button>
          <button>Delete</button>
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
