import React from "react";
import "../../Styling/Menu.css";

const Entrees = (product, addToCart) => {
  product = product.props;
  const priceWithTax = (product.price * 0.0825 + product.price).toFixed(2);
  return (
    <div id="menu-item">
      <h3 id="name">{product.name}</h3>
      <figure id="menu-image">
        <img id="image" alt="" src={product.image} />
        <figcaption id="description">{product.description}</figcaption>
      </figure>
      <div id="add-to-cart">
        <button className="btn-add-to-cart" onClick={addToCart}>
          add to cart
        </button>
      </div>
      <label id="quantity-label">
        Quantity
        <input
          id="menu-item-quantity"
          type="number"
          min="1"
          max={product.inStock}
          placeholder="1"
        />
      </label>
      <p id="price">${priceWithTax}</p>
      <hr></hr>
    </div>
  );
};

export default Entrees;
