const express = require("express");
const cors = require("cors");
const { randomBytes } = require("crypto");

const app = express();
app.use(express.json());
app.use(cors());

const reviewsByMenuItemSku = {};

app.get("/menuItems/:sku/reviews", (req, res) => {
  res.send(reviewsByMenuItemSku[req.params.sku] || []);
});

app.post("/menuItems/:sku/reviews", (req, res) => {
  const reviewId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const reviews = reviewsByMenuItemSku[req.params.sku] || [];

  reviews.push({ id: reviewId, content });

  reviewsByMenuItemSku[req.params.sku] = reviews;

  res.status(201).send(reviews);
});

app.listen(4002, () => {
  console.log("listening on 4002");
});
