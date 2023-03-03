const express = require("express");
const mongoose = require("mongoose");
const { randomBytes } = require("crypto");

const app = express();

app.use(express.json());

const skuGenerator = (sku) => {
  const sku = randomBytes(4).toString("hex");
};

app.get("/menuItems", (req, res) => {
  res.send(menuItems);
});

app.post("/menuItems/:sku", (req, res) => {
  const sku = randomBytes(4).toString("hex");
  const { menuItem } = req.body;

  menuItems[sku] = {
    _id,
    description,
    image,
    inStock,
    price,
  };

  menuitems.push({ sku, menuItem });
  res.status(201).send(menuItems[id]);
});
app.listen(4004, () => {
  console.log("listening on 4004");
});
