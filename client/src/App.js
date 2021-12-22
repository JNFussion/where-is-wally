import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Level from "./components/Level";
import "./styles/index.css";

const App = function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/level/:id" element={<Level />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
