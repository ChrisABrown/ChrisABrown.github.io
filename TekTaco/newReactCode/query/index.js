const cors = require("cors");
const express = require("express");

const app = express();
app.use(express.json());
app.use(cors());

const employees = {};
const menuItems = {};
const reviews = {};

app.get("/employees", (req, res) => {
  res.send(employees);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "EmployeeCreated") {
    const { id, employee } = data;
    employees[id] = { employee };
  }

  if (type === "ReviewCreated") {
    const { id, content, menuItemSku } = data;

    // const menuItem = menuItems[menuItemSku];

    reviews.push({ id, content });
  }
  if (type == "MenuItemCreated") {
    const { sku, menuItem } = data;
    const item = menuItems[sku];

    menuItems[sku] = { sku, menuItem };
  }

  console.log(menuItems);
  console.log(employees);
});

app.listen(4001, () => {
  console.log("listening on 4001 - Query");
});
