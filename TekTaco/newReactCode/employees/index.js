const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { randomBytes } = require("crypto");

const app = express();

app.use(express.json());
app.use(cors());

const employees = {};

app.get("/admin", (req, res) => {
  res.send(employees);
});

app.post("/admin", async (req, res) => {
  const id = randomBytes(3).toString("hex");
  const { employee } = req.body;

  employees[id] = {
    employee: {
      employeeId: id,
      name: employee["name"],
      accessLevel: employee["accessLevel"],
      email: employee["email"],
    },
  };

  await axios
    .post("http://localhost:4008/events", {
      type: "EmployeeCreated",
      data: {
        id,
        employee,
      },
    })
    .catch((err) => console.error(err));

  res.status(201).send(employees[id]);
});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);

  res.send({});
});

app.listen(4000, () => {
  console.log("listening on 4000 - Employees");
});
