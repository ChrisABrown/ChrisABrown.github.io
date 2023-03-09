const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { randomBytes } = require("crypto");

const app = express();
app.use(express.json());
app.use(cors());

const employees = {};

app.get("/4000/employees", (req, res) => {
  res.send(employees);
});

app.post("/4000/employees", async (req, res) => {
  const id = randomBytes(5).toString("hex");
  const { firstName } = req.body;

  employees[id] = {
    id,
    firstName,
  };

  await axios.post("http://localhost:4008/events", {
    type: "EmployeeCreated",
    data: {
      id: employeeId,
      name,
      email,
      accessLevel,
    },
  });

  res.status(201).send(employees[id]);
});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);

  res.send({});
});

app.listen(4000, () => {
  console.log("listening on 4000");
});
