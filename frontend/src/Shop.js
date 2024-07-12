import React from "react";
import PageHeader from "./components/PageHeader";
import ProductSection from "./components/ProductSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import bannerImage from "./components/img/banner/b29.jpg"; // Import the image

import "./index.css";

const Shop = () => {
  return (
    <div className="color_background">
      <PageHeader
        title="#Ancient Wisdom"
        subtitle="Heal Naturally with Ayurveda"
        img={bannerImage} // Pass the imported image
      />
      <ProductSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Shop;
