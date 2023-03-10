const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { randomBytes } = require("crypto");

const app = express();
app.use(express.json());
app.use(cors());

const reviewsByMenuItemSku = {};

app.get("/menuItems/reviews", (req, res) => {
  res.send(reviewsByMenuItemSku[req.params.sku] || []);
});

app.post("/menuItems/reviews", async (req, res) => {
  const reviewId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const reviews = reviewsByMenuItemSku[req.params.sku] || [];

  reviews.push({ id: reviewId, content });

  reviewsByMenuItemSku[req.params.sku] = reviews;

  await axios.post("http://localhost:4008/events", {
    type: "ReviewCreated",
    data: {
      id: reviewId,
      content,
      menuItemSku: req.params.sku,
    },
  });

  res.status(201).send(reviews);
});

app.post("/events", (req, res) => {
  console.log("Event Received", req.body.type);
  res.send({});
});

app.listen(4002, () => {
  console.log("listening on 4002 - reviews");
});
