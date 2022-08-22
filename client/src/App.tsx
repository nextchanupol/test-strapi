import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:product_id" element={<ProductDetail />} />
        <Route path="/add-product"></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
