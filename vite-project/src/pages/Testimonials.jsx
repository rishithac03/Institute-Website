import React, { useState, useEffect } from "react";
import "../styles/testimonials.css";
import testimonialsData from "../pages/data/testimonials.json"
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const nextSlide = () => {
    if (index < totalPages - 1) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const cardsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(testimonialsData.length / cardsPerPage);
  const currentTestimonials = testimonialsData.slice(
    index * cardsPerPage,
    (index + 1) * cardsPerPage
  );

  return (
    <section className="testimonials-page">
      <div className="testimonials-container">
        <span className="section-tag">TESTIMONIALS</span>
        <h2 className="section-title">What Our Students Say </h2>
        <p className="section-desc"> We take pride in the success of our students. Here's what they say about their journey with us. </p>
        <div className="testimonial-wrapper">
          <button className="nav-btn left" onClick={prevSlide} disabled={index === 0}> <FaChevronLeft /> </button>
          <div className="testimonial-slider">
            <div key={index} className="testimonial-cards slide">
              {currentTestimonials.map((item, i) => (
                <div className="testimonial-card" key={i}>
                  <div className="stars">
                    {[...Array(item.rating)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                  <h3>{item.title}</h3>
                  <p className="review"> {item.review} </p>
                  <div className="student-info">
                    <img src={item.image} alt={item.name} /> <div>
                      <h4>{item.name}</h4>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="nav-btn right" onClick={nextSlide} disabled={index === totalPages - 1}> <FaChevronRight /> </button>
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={`dot ${index === i ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
