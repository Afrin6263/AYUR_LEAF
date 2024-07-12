import React from "react";
import f1 from "./img/features/f1.png";
import f2 from "./img/features/f2.png";
import f3 from "./img/features/f3.png";
import f4 from "./img/features/f4.png";
import f5 from "./img/features/f5.png";
import f6 from "./img/features/f6.png";

const FeatureBox = ({ imageSrc, altText, title }) => {
  return (
    <div className="fe-box">
      <img src={imageSrc} alt={altText} />
      <h6>{title}</h6>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section id="feature" className="section-p1">
      <FeatureBox imageSrc={f1} altText="Free Shipping" title="Free Shipping" />
      <FeatureBox imageSrc={f2} altText="Online Order" title="Online Order" />
      <FeatureBox imageSrc={f3} altText="Save Money" title="Save Money" />
      <FeatureBox imageSrc={f4} altText="Promotions" title="Promotions" />
      <FeatureBox imageSrc={f5} altText="Happy Sell" title="Happy Sell" />
      <FeatureBox imageSrc={f6} altText="24/7 Support" title="24/7 Support" />
    </section>
  );
};

export default FeatureSection;
