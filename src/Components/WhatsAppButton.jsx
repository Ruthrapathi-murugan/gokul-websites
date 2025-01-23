import React from "react";
import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/+919944942933"; // Replace with your phone number

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
      <FaWhatsapp className="custom-whatsapp-icon" size={25} />
    </a>
  );
};

export default WhatsAppButton;
