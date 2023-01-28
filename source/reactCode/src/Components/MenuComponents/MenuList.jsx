import React from "react";

const MenuList = ([inventory]) => {
  return (
    <div id="menu-list">
      {inventory.map((product) => {
        return (
          <main key={product.SKU}>
            <section id="entrees">
              <p id="entree-name">{product.name}</p>
              <p id="entree-image">{product.image}</p>
              <p id="entree-description">{product.description}</p>
              <p id="entree-price">{product.price}</p>
            </section>
            <section id="sides">
              <p id="entree-name">{product.name}</p>
              <p id="entree-image">{product.image}</p>
              <p id="entree-description">{product.description}</p>
              <p id="entree-price">{product.price}</p>
            </section>
            <section id="sides">
              <p id="entree-name">{product.name}</p>
              <p id="entree-image">{product.image}</p>
              <p id="entree-description">{product.description}</p>
              <p id="entree-price">{product.price}</p>
            </section>
          </main>
        );
      })}
    </div>
  );
};

export default MenuList;
