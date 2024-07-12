import React from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"; // Importing the icons
import logo from "./img/logo.png";
import apple from "./img/pay/app.jpg";
import pay from "./img/pay/pay.png";
import play from "./img/pay/play.jpg";

const Footer = () => {
  return (
    <footer className="section-p1 footer">
      <div className="col">
        <img className="logo" src={logo} alt="" />
        <h4>Contact</h4>
        <p>
          <strong>Address:</strong> 562 MadhuraNagar Road, Street 32, Khammam,
          Telangana
        </p>
        <p>
          <strong>Phone:</strong> +91 998 832 365 / (+91) 979945321
        </p>
        <p>
          <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
        </p>
        <div>
          <h4>Follow us</h4>
          <div className="icon follow">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faPinterest} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
      </div>
      <div className="col">
        <h4>About</h4>
        {/* eslint-disable-next-line */}
        <a href="javascript:void(0)">About Us</a>
        {/* eslint-disable-next-line */}
        <a href="javascript:void(0)">Delivery Information</a>
        {/* eslint-disable-next-line */}
        <a href="javascript:void(0)">Privacy Policy</a>
        {/* eslint-disable-next-line */}
        <a href="javascript:void(0)">Terms & Conditions</a>
        {/* eslint-disable-next-line */}
        <a href="javascript:void(0)">Contact Us</a>
      </div>
      <div className="col">
        <h4>My Account</h4>
        {/* eslint-disable-next-line */}
        <a href="javascript:void(0)">Sign In</a>
        {/* eslint-disable-next-line */}
        <a href="javascript:void(0)">View Cart</a>
        {/* eslint-disable-next-line */}
        <a href="javascript:void(0)">My Wishlist</a>
        {/* eslint-disable-next-line */}
        <a href="javascript:void(0)">Track My Order</a>
        {/* eslint-disable-next-line */}
        <a href="javascript:void(0)">Help</a>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
          <img src={apple} alt="" />
          <img src={play} alt="" />
        </div>
        <p>Secure Payment Gateways</p>
        <img src={pay} alt="" />
      </div>
      <div className="copy-right">
        <p>&copy; 2024, Ayurvedic website</p>
      </div>
    </footer>
  );
};

export default Footer;
