import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocketchat } from "@fortawesome/free-brands-svg-icons"; // Import Rocket.Chat icon
import "../index.css"; // Import CSS for styling

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! Welcome to Ayur. How can I assist you today?",
    },
  ]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    const userInput = document.getElementById("user-input").value.trim();

    if (userInput) {
      const responses = {
        hi: "Hello! Welcome to Ayur. How can I assist you today?",
        "how are you": "I'm just a chatbot, but I'm here to help you!",
        bye: "Goodbye! Have a great day!",
        "what is Ayur":
          "Ayurveda is an ancient holistic healing system originating from India. It emphasizes the balance of mind, body, and spirit for overall health and well-being.",
        Ayur: "Ayurveda is an ancient holistic healing system originating from India. It emphasizes the balance of mind, body, and spirit for overall health and well-being.",
        "what is Ayurveda":
          "Ayurveda is an ancient holistic healing system originating from India. It emphasizes the balance of mind, body, and spirit for overall health and well-being.",
        "what products do you offer":
          "At Ayur, we offer a wide range of Ayurvedic products including herbal supplements, skincare, haircare, wellness items, and more.",
        "how can Ayurveda help me":
          "Ayurveda offers personalized solutions based on your unique body constitution (dosha). It can help with various health issues, promote balance, and enhance overall wellness.",
        "do you have any special offers":
          "Yes, we often have special promotions and discounts on our products. You can check our website or subscribe to our newsletter for updates.",
        "how do I choose the right product":
          "Choosing the right product depends on your specific needs and body type. Our team can help guide you based on your requirements and preferences.",
        "can Ayurveda treat specific conditions":
          "Ayurveda offers holistic approaches to various health conditions. While it may not cure all ailments, it can provide relief, improve symptoms, and support overall health.",
        "are your products organic":
          "Yes, we prioritize organic and natural ingredients in our products to ensure purity and effectiveness.",
        "do you offer consultations":
          "Yes, we offer personalized consultations with Ayurvedic experts to assess your health concerns and recommend suitable treatments or products.",
        "how can I improve my digestion":
          "Ayurveda offers dietary recommendations, herbal supplements, and lifestyle practices to improve digestion. We can provide guidance on incorporating these into your routine.",
        "where are you located":
          "We are located at [your location]. You can visit us or contact us online for more information.",
        "how do I place an order":
          "You can place an order through our website by browsing the products and adding them to your cart. Follow the checkout process to complete your purchase.",
        "what payment methods do you accept":
          "We accept various payment methods including credit/debit cards, PayPal, and other online payment options.",
        "how long does shipping take":
          "Shipping times vary based on your location and the shipping method chosen. Typically, it takes 3-7 business days for domestic orders.",
        "do you ship internationally":
          "Yes, we offer international shipping. Please check our shipping policy for more details on rates and delivery times.",
        "can I track my order":
          "Yes, once your order is shipped, you will receive a tracking number via email to monitor your package's progress.",
        "what is your return policy":
          "We offer a 30-day return policy for unused and unopened products. Please contact our customer service for assistance with returns.",
        "how can I contact customer support":
          "You can contact our customer support via email at support@ayur.com or call us at [your phone number]. We are here to help!",
        "what are your business hours":
          "Our business hours are Monday to Friday, 9 AM to 6 PM. Feel free to reach out during these times for assistance.",
        "what is a dosha":
          "In Ayurveda, a dosha is one of the three bodily humors that make up one's constitution: Vata (air and space), Pitta (fire and water), and Kapha (earth and water).",
        "what is Panchakarma":
          "Panchakarma is a detoxification program in Ayurveda involving five therapeutic treatments to cleanse the body of toxins and restore balance.",
        "what is Ashwagandha":
          "Ashwagandha is a powerful herb used in Ayurveda for its adaptogenic properties, helping to reduce stress and improve overall health.",
        "what is Turmeric":
          "Turmeric is a spice commonly used in Ayurveda for its anti-inflammatory and antioxidant properties.",
        "what is Triphala":
          "Triphala is an Ayurvedic herbal formulation consisting of three fruits: Amalaki, Bibhitaki, and Haritaki, used for its digestive benefits.",
        "what is Yoga":
          "Yoga is a practice originating in ancient India that involves physical postures, breath control, and meditation for holistic health and well-being.",
        "what is Meditation":
          "Meditation is a practice of focused attention and mindfulness to achieve mental clarity, emotional calmness, and stability.",
        "what is Ayurvedic diet":
          "An Ayurvedic diet is a dietary approach based on one's dosha, emphasizing balance and proper digestion with natural, wholesome foods.",
        "what is an Ayurvedic massage":
          "An Ayurvedic massage, also known as Abhyanga, involves the application of warm herbal oils to nourish the skin and promote relaxation.",
        dosha:
          "In Ayurveda, a dosha is one of the three bodily humors that make up one's constitution: Vata (air and space), Pitta (fire and water), and Kapha (earth and water).",
        Panchakarma:
          "Panchakarma is a detoxification program in Ayurveda involving five therapeutic treatments to cleanse the body of toxins and restore balance.",
        Ashwagandha:
          "Ashwagandha is a powerful herb used in Ayurveda for its adaptogenic properties, helping to reduce stress and improve overall health.",
        Turmeric:
          "Turmeric is a spice commonly used in Ayurveda for its anti-inflammatory and antioxidant properties.",
        Triphala:
          "Triphala is an Ayurvedic herbal formulation consisting of three fruits: Amalaki, Bibhitaki, and Haritaki, used for its digestive benefits.",
        Yoga: "Yoga is a practice originating in ancient India that involves physical postures, breath control, and meditation for holistic health and well-being.",
        Meditation:
          "Meditation is a practice of focused attention and mindfulness to achieve mental clarity, emotional calmness, and stability.",
        "Ayurvedic diet":
          "An Ayurvedic diet is a dietary approach based on one's dosha, emphasizing balance and proper digestion with natural, wholesome foods.",
        "Ayurvedic massage":
          "An Ayurvedic massage, also known as Abhyanga, involves the application of warm herbal oils to nourish the skin and promote relaxation.",

        // Add more predefined queries and responses as needed
      };

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: userInput },
      ]);

      if (userInput in responses) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: responses[userInput] },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "bot",
            text: "I'm sorry, I didn't understand. Please try again.",
          },
        ]);
      }

      document.getElementById("user-input").value = "";
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        <FontAwesomeIcon icon={faRocketchat} className="chat-icon" />{" "}
        {/* Message icon */}
      </button>
      {isOpen && (
        <div className="chatbot-content">
          <div className="messages-container">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          {/* Input box for sending messages */}
          <div className="input-container">
            <input
              id="user-input"
              type="text"
              placeholder="Ask your doubt..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
