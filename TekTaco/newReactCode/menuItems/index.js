const axios = require("axios");
const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
const { randomBytes } = require("crypto");

const app = express();

app.use(express.json());
app.use(cors());

const menuItems = {};

app.get("/menuItems", (req, res) => {
  res.send(menuItems);
});

app.post("/menuItems", async (req, res) => {
  const sku = randomBytes(4).toString("hex");

  const { menuItem } = req.body;

  menuItems[sku] = {
    menuItem: {
      sku,
      name: menuItem["name"],
      price: parseInt(menuItem["price"]),
      image: menuItem["image"],
      inStock: parseInt(menuItem["inStock"]),
      reviews: [],
      productType: menuItem["productType"],
      description: menuItem["description"],
    },
  };

  // menuItems.push({ menuItem });

  await axios.post("http://localhost:4008/events", {
    type: "MenuItemCreated",
    data: {
      id: sku,
      menuItem,
    },
  });

  res.status(201).send(menuItems[sku]);
});

app.post("/events", (req, res) => {
  console.log("Event Received", req.body.type);
  res.send({});
});

app.listen(4004, () => {
  console.log("listening on 4004");
});
