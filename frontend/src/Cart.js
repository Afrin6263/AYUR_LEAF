import React from "react";
import PageHeader from "./components/PageHeader";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import banner from "./components/img/banner/b26.jpg";
import img1 from "./components/img/products/f1.jpg";
import img2 from "./components/img/products/f2.jpg";
import img3 from "./components/img/products/f3.jpg";
import "./index.css";

const CartItem = ({ imgSrc, altText, productName, price }) => {
  return (
    <tr>
      <td>
        {/* eslint-disable-next-line */}
        <a href="javascript:void(0)">
          <i className="far fa-times-circle"></i>
        </a>
      </td>
      <td>
        <img src={imgSrc} alt={altText} />
      </td>
      <td>{productName}</td>
      <td>{price}</td>
      <td>
        <input type="number" defaultValue="1" />
      </td>
      <td>{price}</td>
    </tr>
  );
};
const Cart = () => {
  return (
    <div className="color_background">
      <PageHeader
        title="#Let's_talk"
        subtitle="LEAVE A MESSAGE, We love to hear from you!"
        img={banner}
      />
      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            <CartItem
              imgSrc={img1}
              altText="Cartoon Astronaut T-shirts"
              productName="Thulasi"
              price="$119.19"
            />
            <CartItem
              imgSrc={img2}
              altText="Cartoon Astronaut T-shirts"
              productName="Ashwagandha"
              price="$119.19"
            />
            <CartItem
              imgSrc={img3}
              altText="Cartoon Astronaut T-shirts"
              productName="Herbal weightminus"
              price="$119.19"
            />
          </tbody>
        </table>
      </section>
      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon" />
            <button className="normal">Apply</button>
          </div>
        </div>
        <div id="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>$ 335</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>$ 335</strong>
              </td>
            </tr>
          </table>
          <button className="normal">Proceed to checkout</button>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Cart;
