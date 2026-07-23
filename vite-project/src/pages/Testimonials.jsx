import React, { useState } from "react";
import "../styles/testimonials.css";
import testimonialsData from "../pages/data/testimonials.json"
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const { name, role, review, title, rating, image } = testimonialsData[index];

  return (
    <section className="testimonials-page">
      <div className="testimonials-container">
        <span className="section-tag">TESTIMONIALS</span>
        <h2 className="section-title">What Our Students Say </h2>
        <p className="section-desc">
          We take pride in the success of our students. Here's what they have to say about their journey with us.
        </p>

        <div className="testimonial-wrapper">
          <button className="nav-btn left" onClick={prevSlide}>
            <FaChevronLeft />
          </button>

          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <div className="stars">
              {[...Array(rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <h3>{title}</h3>
            <p className="review">{review}</p>
            <div className="student-info">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <span>{role}</span>
              </div>
            </div>
          </div>

          <button className="nav-btn right" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
