import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/NavBar";
import About from "./pages/AboutPage";
import Shop from "./pages/ShopPage";
import Home from "./pages/HomePage";
import Error from "./pages/ErrorPage";

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
