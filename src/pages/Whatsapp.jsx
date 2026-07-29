import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        width: "65px",
        height: "65px",
        borderRadius: "50%",
        background: "#25D366",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "38px",
        textDecoration: "none",
        boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
        zIndex: 9999,
        transition: "0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsApp;