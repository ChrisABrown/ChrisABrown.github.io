const express = require("express");
const mongoose = require("mongoose");
const { randomBytes } = require("crypto");

const app = express();

app.use(express.json());
const menuItems = {};

app.get("/menuItems", (req, res) => {
  res.send(menuItems);
});

app.post("/menuItems/", (req, res) => {
  const sku = randomBytes(4).toString("hex");
  const { menuItem } = req.body;

  menuItems[sku] = {
    sku,
    menuItem,
  };

  res.status(201).send(menuItems[sku]);
});
app.listen(4004, () => {
  console.log("listening on 4004");
});
