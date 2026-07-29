import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/collaborations.css"

import colleges from "../pages/data/colleges.json";
import companies from "../pages/data/companies.json";

function Collaborations() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start", }); 
          }}, 
          100);
    } 
    else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);

  const stats = [
    {
      id: 1,
      number: "25+",
      title: "Partner Colleges",
    },
    {
      id: 2,
      number: "100+",
      title: "Industry Partners",
    },
    {
      id: 3,
      number: "5000+",
      title: "Students Trained",
    },
    {
      id: 4,
      number: "92%",
      title: "Placement Success",
    },
  ];

  const benefits = [
    {
      id: 1,
      title: "Industry Curriculum",
      description:
        "Training designed according to current industry requirements.",
    },
    {
      id: 2,
      title: "Expert Trainers",
      description:
        "Experienced professionals provide practical learning.",
    },
    {
      id: 3,
      title: "Internships",
      description:
        "Hands-on internship opportunities with leading companies.",
    },
    {
      id: 4,
      title: "Placement Assistance",
      description:
        "Dedicated placement support and interview preparation.",
    },
    {
      id: 5,
      title: "Guest Sessions",
      description:
        "Regular sessions from industry experts and mentors.",
    },
    {
      id: 6,
      title: "Certification",
      description:
        "Industry-recognized certifications for every program.",
    },
  ];

  const process = [
    {
      id: 1,
      title: "Connect",
      description:
        "Discuss collaboration opportunities with our team.",
    },
    {
      id: 2,
      title: "Planning",
      description:
        "Identify suitable training and placement programs.",
    },
    {
      id: 3,
      title: "Implementation",
      description:
        "Conduct workshops, internships and technical training.",
    },
    {
      id: 4,
      title: "Success",
      description:
        "Empower students with placements and career growth.",
    },
  ];

  return (
    <div className="collaborations-page">
      <section className="collab-hero">
        <div className="collab-hero-grid">
          <div className="collab-hero-content">
            <span className="collab-hero-badge">
              Academic & Industry Collaborations
            </span>
            <h1>
              Building Strong
              <span> College & Industry </span>
              Partnerships
            </h1>
            <p>
              We collaborate with reputed colleges and leading companies
              to bridge the gap between education and industry through
              technical training, internships, certifications, workshops,
              and placement opportunities.
            </p>
            <div className="collab-hero-buttons">
              <a href="#colleges" className="collab-primary-btn">
                Explore Colleges
              </a>
              <a href="#companies" className="collab-secondary-btn">
                Industry Partners
              </a>
            </div>
          </div>
        </div>

      </section>
      <section className="stats-section">

        <div className="collab-container">

          <div className="stats-grid">

            {stats.map((item) => (

              <div className="stat-card" key={item.id}>

                <h2>{item.number}</h2>

                <p>{item.title}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section id="colleges" className="college-section">

        <div className="collab-container">

          <div className="section-header">

            <span>Academic Collaborations</span>

            <h2>Our Partner Colleges</h2>

            <p>
              We work with reputed colleges to provide
              practical technical education,
              placement preparation,
              certification programs,
              internships,
              and industry exposure.
            </p>

          </div>

          <div className="college-slider">
            <div className="college-track">

            {[...colleges, ...colleges].map((college,index) => (              
              <div className="college-card" key={`${college.id}-${index}`} college={college}>

                <div className="college-card-top">

                  <img
                    src={college.logo}
                    alt={college.name}
                    className="college-logo"
                  />

                </div>

                <div className="college-card-body">

                  <h3>{college.name}</h3>

                  <span className="college-type">
                    {college.type}
                  </span>

                  <p className="college-description">
                    {college.description}
                  </p>

                  <div className="college-location">
                    📍 {college.location}
                  </div>

                  <div className="program-title">
                    Programs Offered
                  </div>

                  <div className="program-list">

                    {college.programs.map((program, index) => (

                      <span
                        className="program-badge"
                        key={index}
                      >
                        {program}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            ))}
            </div>
          </div>

        </div>

      </section>
      <section className="benefits-section">

        <div className="collab-container">

          <div className="section-header">

            <span>Why Choose Us</span>

            <h2>
              Why Colleges Collaborate With Us
            </h2>

            <p>
              We help educational institutions bridge the gap
              between classroom learning and industry expectations
              through practical training and career-oriented programs.
            </p>

          </div>

          <div className="benefits-grid">

            {benefits.map((benefit) => (

              <div
                className="benefit-card"
                key={benefit.id}
              >

                <div className="benefit-icon">
                  ✓
                </div>

                <h3>
                  {benefit.title}
                </h3>

                <p>
                  {benefit.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
      <section
        id="companies"
        className="companies-section"
      >

        <div className="collab-container">

          <div className="section-header">

            <span>Industry Collaborations</span>

            <h2>
              Our Partner Companies
            </h2>

            <p>
              Our industry partners support students through
              internships, live projects, technical mentoring,
              recruitment drives, and placement opportunities.
            </p>

          </div>

          <div className="company-slider">
            <div className="company-track">

            {companies.map((company) => (
                            <div
                className="company-card"
                key={company.id}
              >

                <div className="company-logo-wrapper">

                  <img
                    src={company.logo}
                    alt={company.name}
                    className="company-logo"
                  />

                </div>

                <div className="company-content">

                  <h3>{company.name}</h3>

                  <span className="company-role">
                    {company.role}
                  </span>

                  <p>
                    Collaborating with us to provide students with
                    internships, live projects, technical mentoring,
                    and placement opportunities.
                  </p>

                </div>

              </div>

            ))}
            </div>
          </div>

        </div>

      </section>

      <section className="collab-cta">

        <div className="collab-container">

          <div className="cta-box">

            <h2>
              Become Our Collaboration Partner
            </h2>

            <p>
              We welcome colleges, universities, startups, and
              organizations to collaborate with us in creating
              industry-ready professionals through training,
              internships, workshops, certifications, and
              placement initiatives.
            </p>

            <div className="cta-buttons">

              <NavLink
                to="/contact"
                className="collab-primary-btn"
              >
                Contact Us
              </NavLink>

              <a
                href="#colleges"
                className="collab-secondary-btn"
              >
                View Collaborations
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Collaborations;