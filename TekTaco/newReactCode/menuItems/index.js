const express = require("express");

const app = express();

app.use(express.json());

app.get("/menuItems", (req, res) => {
  res.send();
});
app.post("/menuItems", (req, res) => {});

app.listen(4004, () => {
  console.log("listening on 4004");
});
