import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import ScrollToTop from "./Pages/ScrollToTop"; // 👈 import it
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* 👈 Use it once here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
