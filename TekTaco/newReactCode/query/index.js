const cors = require("cors");
const express = require("express");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/employees", (req, res) => {});

app.post("/events", (req, res) => {});

app.listen(4001, () => {
  console.log("listening on 4001 - Query");
});
