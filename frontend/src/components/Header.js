import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";
import logo from "./img/logo.png";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <section id="header">
      <div className="logo-text">
        <h3>Ayur</h3>
        <NavLink to="/">
          <img src={logo} className="logo" alt="Logo" />
        </NavLink>
      </div>
      <div>
        <ul id="nav-bar">
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" activeClassName="active">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="active">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName="active">
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" activeClassName="active">
              Register
            </NavLink>
          </li>
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </div>
      <div id="mobile" className="hidden">
        <NavLink to="/cart">Cart</NavLink>
        <i id="bar" className="fas fa-outdent" onClick={toggleMobileMenu}></i>
      </div>
    </section>
  );
};

// Function to toggle mobile menu
const toggleMobileMenu = () => {
  const mobileMenu = document.getElementById("mobile");
  mobileMenu.classList.toggle("hidden");
};

export default Header;
