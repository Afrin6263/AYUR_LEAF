import React from "react";
import Product1 from "./Product1";
import img444 from "./img/products/444.jpg";
import imgN7 from "./img/products/n7.jpg";
import imgN3 from "./img/products/n3.jpg";
import imgN2 from "./img/products/n2.jpg";
import imgF1 from "./img/products/f1.jpg";
import imgF4 from "./img/products/f4.jpg";
import imgF3 from "./img/products/f3.jpg";
import imgN1 from "./img/products/n1.jpg";
import imgN4 from "./img/products/n4.jpg";
import imgN6 from "./img/products/n6.jpg";
import imgN5 from "./img/products/n5.jpg";
import imgF8 from "./img/products/f8.jpg";
import imgF2 from "./img/products/f2.jpg";
import imgF12 from "./img/products/f12.jpg";
import imgF10 from "./img/products/f10.jpg";
import imgF5 from "./img/products/f5.jpg";
import imgF11 from "./img/products/f11.jpg";
import imgF9 from "./img/products/f9.jpg";

const ProductSection = () => {
  const products = [
    {
      imgLink: img444,
      name: "Shatavari Oil",
      cost: "$78",
    },
    {
      imgLink: imgN7,
      name: "Sasame Oil",
      cost: "$78",
    },
    {
      imgLink: imgN3,
      name: "Coconut Oil",
      cost: "$78",
    },
    {
      imgLink: imgN2,
      name: "Ashwagandha Oil",
      cost: "$78",
    },
    {
      imgLink: imgF1,
      name: "Neem Oil",
      cost: "$78",
    },
    {
      imgLink: imgF4,
      name: "Tulsi Oil",
      cost: "$78",
    },
    {
      imgLink: imgF3,
      name: "Jasmine Oil",
      cost: "$78",
    },
    {
      imgLink: imgN1,
      name: "Kumkumadi Oil",
      cost: "$78",
    },
    {
      imgLink: imgN4,
      name: "Triphala Oil",
      cost: "$78",
    },
    {
      imgLink: imgN6,
      name: "Mahabhringraj Oil",
      cost: "$78",
    },
    {
      imgLink: imgN5,
      name: "Bhringraj Oil",
      cost: "$78",
    },
    {
      imgLink: imgF8,
      name: "Haritaki",
      cost: "$78",
    },
    {
      imgLink: imgF2,
      name: "Trikatu",
      cost: "$78",
    },
    {
      imgLink: imgF12,
      name: "Tulsi",
      cost: "$78",
    },
    {
      imgLink: imgF10,
      name: "Guggul",
      cost: "$78",
    },
    {
      imgLink: imgF5,
      name: "Shatavari",
      cost: "$78",
    },
    {
      imgLink: imgF11,
      name: "Brahmi",
      cost: "$78",
    },
    {
      imgLink: imgF9,
      name: "Turmeric",
      cost: "$78",
    },
    {
      imgLink: imgF10,
      name: "Guggul",
      cost: "$78",
    },
    {
      imgLink: imgF5,
      name: "Shatavari",
      cost: "$78",
    },
  ];

  return (
    <section id="product1" className="section-p1">
      <h2>Featured Products</h2>
      <p>Discover Your Ayurvedic Journey</p>
      <div className="pro-container">
        {products.map((product, index) => (
          <Product1
            key={index}
            imgLink={product.imgLink}
            name={product.name}
            cost={product.cost}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
