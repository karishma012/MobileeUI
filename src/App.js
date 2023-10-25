import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Discover from "./Pages/Discover";
import Details from "./Pages/Details";
import Cart from "./Pages/MyCart"; // Import the AddToCart component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Discover />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
