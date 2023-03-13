const cors = require("cors");
const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const employees = {};
const menuItems = {};
const handleEvent = (type, data) => {
  if (type === "EmployeeCreated") {
    const { id, employee } = data;
    employees[id] = { employee };
  }

  if (type == "MenuItemCreated") {
    const { sku, menuItem } = data;
    const item = menuItems[sku];

    menuItems[sku] = { sku, menuItem };
  }
};

app.get("/employees", (req, res) => {
  res.send(employees);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data);
  res.send({});
});

app.listen(4001, async () => {
  console.log("listening on 4001 - Query");

  const res = await axios.get("http://localhost:4008/events");

  for (let event of res.data) {
    console.log("Processing event", event.type);

    handleEvent(event.type, event.data);
  }
});
