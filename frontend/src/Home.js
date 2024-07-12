import React from "react";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import "./index.css";
import ZigzagSection from "./components/ZigzagSection";
import ControlledCarousel from "./components/ControlledCarousel";
const Home = () => {
  return (
    <div className="color_background">
      <ControlledCarousel />
      <ZigzagSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
