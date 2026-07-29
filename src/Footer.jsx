import React from "react";
import "./Footer.css";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company */}
        <div className="footer-section">
          <h2 className="logo">OfferEra</h2>
          <p>
            Your trusted learning platform providing industry-ready
            courses with expert mentors and placement support.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 style={{textDecoration:"underline"}}>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">

          <h3 style={{textDecoration:"underline"}} >Contact Us</h3>

          <p>
            <FaPhone className="icon" />
            +91 9876543210
          </p>

          <p>
            <FaEnvelope className="icon" />
            info@offerera.com
          </p>

          <p>
            <FaMapMarkerAlt className="icon" />
            Hyderabad, Telangana
          </p>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3 style={{textDecoration:"underline"}}>Follow Us</h3>

          <div className="social-icons">
            
<a href="#">
              <FaTwitter/>
            </a>
            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaFacebook />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 OfferEra. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;