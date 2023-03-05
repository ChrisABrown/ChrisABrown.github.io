const express = require("express");
const cors = require("cors");
const { randomBytes } = require("crypto");

const app = express();
app.use(express.json());
app.use(cors());

const employees = {};

app.get("/employees", (req, res) => {
  res.send(employees);
});

app.post("/employees", (req, res) => {
  const id = randomBytes(5).toString("hex");
  const { firstName } = req.body;

  employees[id] = {
    id,
    firstName,
  };

  res.status(201).send(employees[id]);
});

app.listen(4000, () => {
  console.log("listening on 4000");
});
