import pkg from "express";
import cors from "cors";
import menuItems from "./api/menuItems.route.js.js";

const { Express } = pkg;
const app = pkg();

app.use(cors());
app.use(pkg.json());

app.use("/api/v1/menuItems", menuItems);
app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
});

export default app;
