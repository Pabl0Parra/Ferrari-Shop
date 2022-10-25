import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import About from "./pages/AboutPage";
import Shop from "./components/shop";
import Home from "./components/home";
import Error from "./components/errorPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
