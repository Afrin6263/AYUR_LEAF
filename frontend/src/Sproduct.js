import React from "react";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import ProductSection from "./components/ProductSection";
import "./index.css";

const ProDetails = () => {
  return (
    <section id="prodetails" className="section-p1">
      <div className="single-pro-image">
        <img src="img/products/f1.jpg" width="100%" id="main-img" alt="" />
        <div className="small-img-group">
          <div className="small-img-col">
            <img
              src="img/products/f1.jpg"
              width="100%"
              className="small-img"
              alt=""
            />
          </div>
          <div className="small-img-col">
            <img
              src="img/products/f2.jpg"
              width="100%"
              className="small-img"
              alt=""
            />
          </div>
          <div className="small-img-col">
            <img
              src="img/products/f3.jpg"
              width="100%"
              className="small-img"
              alt=""
            />
          </div>
          <div className="small-img-col">
            <img
              src="img/products/f4.jpg"
              width="100%"
              className="small-img"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="single-pro-details">
        <h6>Home / T-shirts</h6>
        <h4>Men's Fashion T Shirt</h4>
        <h2>$139.00</h2>
        <select>
          <option>Select Size</option>
          <option>X</option>
          <option>XXL</option>
          <option>Small</option>
          <option>Large</option>
        </select>
        <input type="number" value="1" />
        <button className="normal">Add To Cart</button>
        <h4>Product Details</h4>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          beatae pariatur dolores numquam quisquam, commodi tenetur nihil esse
          delectus, autem nostrum minus nam reprehenderit eum dignissimos rem
          ipsa? Reiciendis quasi dicta impedit, eligendi quaerat porro tenetur
          dolor sunt, omnis placeat sit itaque? Consectetur magnam aperiam
          incidunt reprehenderit. mque consectetur?
        </span>
      </div>
    </section>
  );
};

const Sproduct = () => {
  return (
    <>
      <ProDetails />
      <ProductSection />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Sproduct;
