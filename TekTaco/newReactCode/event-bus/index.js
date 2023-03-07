const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios
    .post("http://localhost:4000/events", event)
    .catch((err) => console.error(err));
  axios
    .post("http://localhost:4002/events", event)
    .catch((err) => console.error(err));
  axios
    .post("http://localhost:4004/events", event)
    .catch((err) => console.error(err));

  res.send({ status: "OK" });
});

app.listen(4008, () => {
  console.log("listening on 4008");
});
