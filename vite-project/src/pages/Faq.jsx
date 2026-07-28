import { useMemo, useState } from "react";
import {
  FaChevronDown,
  FaSearch,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import faqData from "../pages/data/faqdata.json";
import "../pages/Faq.css";

const FAQ = () => {
  const categories = [...new Set(faqData.map(item => item.category))];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory = faq.category === selectedCategory;

    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <section className="faq-page">
      {/* ================= Hero ================= */}

      <div className="faq-hero">
        <p className="faq-tag">FREQUENTLY ASKED QUESTIONS</p>

        <h1>
          Find Answers to Your <span>Questions</span>
        </h1>

        <p className="faq-description">
          Browse through our frequently asked questions about admissions,
          courses, placements, fees, certifications, and more.
        </p>
      </div>

      {/* ================= FAQ ================= */}

      <div className="faq-container">
        {/* Left Sidebar */}

        <aside className="faq-sidebar">
          <h3>Categories</h3>

          <div className="faq-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`faq-category ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setActiveIndex(null);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </aside>

        {/* Right Side */}

        <div className="faq-content">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className={`faq-card ${
                  activeIndex === faq.id ? "open" : ""
                }`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleAccordion(faq.id)}
                >
                  <span>{faq.question}</span>

                  <FaChevronDown
                    className={`faq-arrow ${
                      activeIndex === faq.id ? "rotate" : ""
                    }`}
                  />
                </button>

                <div
                  className={`faq-answer ${
                    activeIndex === faq.id ? "show" : ""
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="faq-empty">
              <h3>No FAQs Found</h3>

              <p>
                Try searching with different keywords or choose another
                category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;