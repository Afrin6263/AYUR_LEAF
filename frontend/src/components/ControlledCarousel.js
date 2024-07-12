import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./img/hero8.jpg";
import img2 from "./img/banner/b14.jpg";
import img3 from "./img/about/a-15.jpg";
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          style={{ height: "90vh" }}
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Ancient Remedies</h3>
          <p>The Benefits of Ayurvedic Herbal Treatments</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "90vh" }}
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Balancing Doshas</h3>
          <p>
            Discover the Healing Power of Ayurvedic Herbs: A Comprehensive Guide
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "90vh" }}
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Stress Relief and Relaxation</h3>
          <p>How to Incorporate Ayurvedic Treatments into Your Daily Routin</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
