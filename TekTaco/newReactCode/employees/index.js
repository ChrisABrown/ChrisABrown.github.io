const express = require("express");
const { randomBytes } = require("crypto");

const app = express();
app.use(express.json());

const employees = {};

app.get("/employees", (req, res) => {
  res.send(employees);
});

app.post("/employees", (req, res) => {
  const id = randomBytes(5).toString("hex");
  const { firstName, lastName, accessLevel, email } = req.body;

  employees[id] = {
    id,
    firstName,
    lastName,
    accessLevel,
    email,
  };
  res.status(201).send(employees[id]);
});

app.listen(4000, () => {
  console.log("listening on 4000");
});
