const express = require("express");
const { randomBytes } = require("crypto");

const app = express();
app.use(express.json());

const reviewsByMenuItemSku = {};

app.get("/menuItems/:sku/reviews", (req, res) => {
  res.send(reviewsByMenuItemSku[req.params.sku] || []);
});

app.post("/menuItems/:sku/reviews", (req, res) => {
  const reviewId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const reviews = reviewsByMenuItemSku[req.params.id] || [];

  reviews.push({ id: reviewId, content });

  reviewsByMenuItemSku[req.params.id] = reviews;

  res.status(201).send(reviews);
});

app.listen(4002, () => {
  console.log("listening on 4002");
});
