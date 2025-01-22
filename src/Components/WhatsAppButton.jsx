import React from "react";
import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/<your-phone-number>"; // Replace with your phone number in the format "countrycodephonenumber" (no "+" or spaces)

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;
