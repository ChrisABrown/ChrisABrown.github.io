const cors = require("cors");
const express = require("express");

const app = express();
app.use(express.json());
app.use(cors());

const employees = {};
const menuItems = {};

app.get("/employees", (req, res) => {
  res.send(employees);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "EmployeeCreated") {
    const { id, name, accessLevel } = data;
    employees[id] = { id, name, accessLevel };
  }

  if (type === "ReviewCreated") {
    const { id, content, menuItemSku } = data;

    const menuItem = menuItems[menuItemSku];

    menuItem.reviews.push({ id, content });
  }

  console.log(employees);
});

app.listen(4001, () => {
  console.log("listening on 4001 - Query");
});
