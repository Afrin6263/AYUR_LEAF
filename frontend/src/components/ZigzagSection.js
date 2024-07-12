import React from "react";
import "../index.css"; // Import CSS for styling
import img1 from "./img/about/a10.jpg";
import img2 from "./img/about/a11.jpg";
import img3 from "./img/about/a12.jpg";
import img4 from "./img/about/a13.jpg";
const ZigzagSection = () => {
  return (
    <div className="zigzag-container">
      {/* Step 1 */}
      <div className="zigzag-step">
        <div className="zigzag-image">
          <img src={img1} alt="LeftImage" />
        </div>
        <div className="zigzag-content">
          <h2>Ayurvedic Peace</h2>
          <p>
            Ayurveda instills peace by addressing the root causes of physical
            and mental imbalances. Through practices like meditation, yoga, and
            herbal remedies, it promotes harmony within the body and mind. By
            balancing the doshas and encouraging a healthy lifestyle, Ayurveda
            cultivates inner tranquility and emotional stability. Its holistic
            approach nurtures a sense of peace by restoring balance and
            promoting overall well-being.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="zigzag-step">
        <div className="zigzag-content">
          <h2>Health Benefits</h2>
          <p>
            {" "}
            Ayurveda is believed to be beneficial for both mental and physical
            health. Its holistic approach considers the interconnectedness of
            the mind, body, and spirit, aiming to address imbalances at their
            root causes rather than just treating symptoms. By promoting
            practices such as meditation, yoga, balanced nutrition, and herbal
            remedies, Ayurveda supports overall well-being, helping to alleviate
            stress, enhance mental clarity, and improve physical health.
            However, it's essential to consult with a qualified Ayurvedic
            practitioner for personalized guidance and treatment plans.
          </p>
        </div>
        <div className="zigzag-image">
          <img src={img2} alt="RightImage" />
        </div>
      </div>

      {/* Step 3 */}
      <div className="zigzag-step">
        <div className="zigzag-image">
          <img src={img3} alt="LeftImage" />
        </div>
        <div className="zigzag-content">
          <h2>Happiness with Ayur</h2>
          <p>
            Ayurveda provides tools and practices that can contribute to leading
            a happier and more peaceful life. By promoting balance and harmony
            within the body and mind, Ayurveda helps to alleviate stress,
            enhance mental clarity, and foster emotional well-being. Practices
            such as meditation, yoga, and mindfulness can cultivate a positive
            outlook and inner tranquility, ultimately supporting a happier and
            more fulfilling life. However, individual results may vary, and
            Ayurveda is often used as part of a holistic lifestyle approach
            alongside other factors contributing to happiness and peace.
          </p>
        </div>
      </div>
      {/* Step 4 */}
      <div className="zigzag-step">
        <div className="zigzag-content">
          <h2>Ayurvedic Expertise</h2>
          <p>
            {" "}
            Ayurvedic doctors possess a deep understanding of the principles and
            practices of Ayurveda, an ancient system of holistic healing. They
            undergo rigorous training in traditional Ayurvedic texts, herbal
            medicine, diagnosis techniques, and therapeutic practices. Choosing
            an Ayurvedic doctor ensures access to personalized, holistic
            healthcare that addresses the root cause of ailments rather than
            just symptoms. Ayurvedic treatment focuses on restoring balance to
            the body, mind, and spirit, promoting long-term well-being and
            vitality. The holistic approach of Ayurvedic doctors considers
            individual plans that integrate herbal remedies, dietary changes,
            lifestyle modifications, and therapeutic practices.
          </p>
        </div>
        <div className="zigzag-image">
          <img src={img4} alt="RightImage" />
        </div>
      </div>
    </div>
  );
};

export default ZigzagSection;
