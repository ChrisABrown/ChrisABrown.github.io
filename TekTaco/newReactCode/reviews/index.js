const express = require("express");
const { randomBytes } = require("crypto");

const app = express();
app.use(express.json());

const reviewsByMenuItemId = {};

app.get("/menuItems/:id/reviews", (req, res) => {
  res.send(reviewsByMenuItemId[req.params.id] || []);
});

app.post("/menuItems/:id/reviews", (req, res) => {
  const reviewId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const reviews = reviewsByMenuItemId[req.params.id] || [];

  reviews.push({ id: reviewId, content });

  reviewsByMenuItemId[req.params.id] = reviews;

  res.status(201).send(reviews);
});

app.listen(4002, () => {
  console.log("listening on 4002");
});
