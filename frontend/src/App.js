import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./Home";
import Shop from "./Shop";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import Chatbot from "./components/Chatbot";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
const App = () => {
  return (
    <div className="color_background">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Chatbot />
    </div>
  );
};

export default App;
