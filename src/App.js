import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToHash from "./Pages/ScrollToHash";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/porfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
