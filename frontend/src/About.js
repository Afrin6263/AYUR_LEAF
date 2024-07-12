import React from "react";
import PageHeader from "./components/PageHeader";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import FeatureSection from "./components/FeatureSection";
import img1 from "./components/img/about/a77.jpg";
import banner from "./components/img/about/a28.jpg";
import video from "./components/img/about/1.mp4";
import "./index.css";

const About = () => {
  return (
    <div className="color_background">
      <PageHeader
        title="#Ayurveda"
        subtitle="Balance Mind, Body, Spirit."
        img={banner}
      />
      <section id="about-head" className="section-p1">
        {" "}
        {/* Use className instead of class */}
        <img src={img1} alt="" /> {/* Close the img tag */}
        <div>
          <h2>Who We Are?</h2>
          <p>
            Experience the unparalleled expertise and dedication of Ayurvedic
            doctors, the true custodians of ancient healing wisdom. Our
            Ayurvedic practitioners blend centuries-old traditions with modern
            knowledge to provide holistic care tailored to your unique needs.
            These devoted professionals undergo rigorous training and continuous
            education, mastering the art of balancing the body, mind, and spirit
            through natural remedies. Our treatments, such as Abhyanga,
            Shirodhara, Swedana, Nasya, and Dhara, offer a holistic approach to
            wellness. Abhyanga rejuvenates your body with warm herbal oils,
            enhancing circulation and relaxation. Shirodhara soothes the mind
            with a gentle stream of warm oil, reducing stress and promoting
            mental clarity. Swedana, an herbal steam therapy, detoxifies and
            revitalizes. Nasya cleanses the nasal passages, improving
            respiratory health, while Dhara provides deep relaxation through a
            continuous flow of therapeutic liquids. Visit us to discover the
            profound benefits of Ayurveda, guided by the dedication and skill of
            our exceptional Ayurvedic doctors. Your journey to holistic
            well-being begins here.
          </p>
          <abbr title="">
            Ayurveda: Ancient Wisdom, Modern Solutions. Discover holistic
            healing and balance for your body, mind, and spirit with Ayurvedic
            practices.
          </abbr>
          <br />
          <br /> {/* Use self-closing tag syntax */}
          {/*  eslint-disable-next-line jsx-a11y/no-distracting-elements */}
          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
            Ayurveda: holistic, natural, balance-focused. Modern medicine:
            symptomatic, technologically advanced. Both aim for health, differ
            in approach and philosophy.
          </marquee>
        </div>
      </section>
      <section id="about-app" className="section-p1">
        {" "}
        {/* Use className instead of class */}
        <h1>
          More about {/* eslint-disable-next-line */}
          <a href="javascript:void(0)">Ayurveda</a>
        </h1>
        <div className="video">
          {" "}
          {/* Use className instead of class */}
          <video autoPlay muted loop src={video}></video>{" "}
          {/* Use autoPlay instead of autoplay */}
        </div>
      </section>
      <FeatureSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default About;
