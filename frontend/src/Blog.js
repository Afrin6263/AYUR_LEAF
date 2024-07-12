import React from "react";
import PageHeader from "./components/PageHeader";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import banner from "./components/img/banner/b-300.jpg";
import img1 from "./components/img/blog/b15.jpg";
import img2 from "./components/img/blog/b13.jpg";
import img3 from "./components/img/blog/b17.jpg";
import img4 from "./components/img/blog/b18.jpg";
import img5 from "./components/img/blog/b19.jpg";
import img6 from "./components/img/blog/b20.jpg";
import "./index.css";
import BlogBox from "./components/BlogBox";

const Blog = () => {
  return (
    <div className="color_background">
      <PageHeader title="#Treatments" subtitle="" img={banner} />
      <section id="blog">
        <BlogBox
          imageUrl={img1}
          title="Abhyanga"
          content="Abhyanga is a traditional Ayurvedic massage therapy that involves the application of warm herbal oils to the entire body. It helps to nourish the skin, relax the muscles, improve circulation, enhance lymphatic drainage, and promote overall relaxation and well-being. Abhyanga is often used as a daily self-care practice and is also part of panchakarma therapies."
        />
        <BlogBox
          imageUrl={img2}
          title="Shirodhara"
          content="Shirodhara is an Ayurvedic therapy where a continuous stream of warm herbal oil is poured onto the forehead. It helps to calm the mind, reduce stress, and improve sleep. Shirodhara is believed to balance the doshas, particularly Vata and Pitta, promoting mental clarity and relaxation."
        />
        <BlogBox
          imageUrl={img3}
          title="Swedana"
          content="Swedana is an Ayurvedic therapy that involves inducing sweat using steam infused with medicinal herbs. This treatment helps to open pores, eliminate toxins, and improve circulation. Swedana is often used after Abhyanga (oil massage) to enhance its benefits, promoting relaxation, relieving muscle tension, and balancing the doshas. It's a key component of Panchakarma detoxification procedures."
        />
        <BlogBox
          imageUrl={img4}
          title="Nasya"
          content="Nasya is an Ayurvedic therapy that involves administering herbal oils or powders through the nose. This treatment is designed to cleanse and rejuvenate the nasal passages, improving respiratory functions. Nasya helps in alleviating headaches, sinus congestion, and allergies. It also promotes mental clarity and balances the doshas, particularly Vata and Kapha, enhancing overall well-being."
        />
        <BlogBox
          imageUrl={img5}
          title="Dhara"
          content="Dhara is an Ayurvedic therapy where a continuous stream of warm herbal liquids, such as oil, milk, or buttermilk, is poured over specific parts of the body. This treatment is known for its calming effects, helping to alleviate stress, anxiety, and insomnia. Dhara also aids in detoxification, improves circulation, and balances the doshas, particularly Vata and Pitta."
        />
        <BlogBox
          imageUrl={img6}
          title="Herbal therapies"
          content="Herbal therapies in Ayurveda involve the use of various plant-based treatments to promote health and treat illnesses. These therapies include herbal teas, oils, powders, and decoctions tailored to individual needs and doshic imbalances. They are used to detoxify the body, boost immunity, improve digestion, and address specific health conditions, providing a natural and holistic approach to wellness."
        />
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Blog;
