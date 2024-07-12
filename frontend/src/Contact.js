import React from "react";
import PageHeader from "./components/PageHeader";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import img from "./components/img/about/final.jpg";
import pp1 from "./components/img/people/1.png";
import pp2 from "./components/img/people/2.png";
import pp3 from "./components/img/people/3.png";
import "./index.css";

const Contact = () => {
  return (
    <div className="color_background">
      <PageHeader
        title="#Let's_talk"
        subtitle="LEAVE A MESSAGE, We love to hear from you!"
        img={img}
      />
      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of out agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <ul>
              <li>
                <i className="fal fa-map"></i>
                <p>17-Basar IIIT ,Nirmal ,Telangana</p>
              </li>
              <li>
                <i className="far fa-envelope"></i>
                <p>Basar@rgukt.ac.in</p>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <p>iiit@rgukt.ac.in</p>
              </li>
              <li>
                <i className="far fa-clock"></i>
                <p>Monday to Saturday: 9.00am to 16.00pm</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="map">
          {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.1244965248247!2d77.91919617394562!3d18.881557358050454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcde18c82d2cdb1%3A0x469505d0e802dd0c!2sBasara%20IIIT%20Campus!5e0!3m2!1sen!2sin!4v1709463132837!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>we love to hear from you</h2>
          <input type="text" placeholder="your name" />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="your message"
          ></textarea>
          <button className="normal">Submit</button>
        </form>
        <div className="people">
          <div>
            <img src={pp1} alt="" />
            <p>
              <span>John Doe</span>Senior Marketing Manager <br />
              Phone: +000 123 000 77 88 <br />
              Email:contact@example.com
            </p>
          </div>
          <div>
            <img src={pp2} alt="" />
            <p>
              <span>Kim jungkook</span>Senior Marketing Manager <br />
              Phone: +000 123 000 77 88 <br />
              Email:contact@example.com
            </p>
          </div>
          <div>
            <img src={pp3} alt="" />
            <p>
              <span>Lisa Manobal</span>Senior Marketing Manager <br />
              Phone: +000 123 000 77 88 <br />
              Email:contact@example.com
            </p>
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Contact;
