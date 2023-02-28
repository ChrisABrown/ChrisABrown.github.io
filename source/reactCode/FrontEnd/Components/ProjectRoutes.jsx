import React from "react";
import { Home } from "../HomePage/Home";
import { Routes, Route } from "react-router-dom";

export default function ProjectRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}
