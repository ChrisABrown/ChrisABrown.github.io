const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { randomBytes } = require("crypto");

const app = express();
app.use(express.json());
app.use(cors());

const reviewsByMenuItemId = {};

app.get("/menuItems/reviews", (req, res) => {
  res.send(reviewsByMenuItemId[req.params._id] || []);
});

app.post("/menuItems/reviews", async (req, res) => {
  const reviewId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const reviews = reviewsByMenuItemId[req.params._id] || [];

  reviews.push({ id: reviewId, content });

  reviewsByMenuItemId[req.params._id] = reviews;

  await axios.post("http://localhost:4008/events", {
    type: "ReviewCreated",
    data: {
      id: reviewId,
      content,
      menuItemId: req.params._id,
    },
  });

  res.status(201).send(reviews);
});

app.post("/events", (req, res) => {
  console.log("Event Received", req.body.type);
  res.send({});
});

app.listen(4002, () => {
  console.log("listening on 4002 - Reviews");
});
