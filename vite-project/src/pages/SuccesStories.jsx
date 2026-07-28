import { useState } from "react";
import "../styles/successstories.css";
import data from "../pages/data/SuccessStoriesdata.json";

import {
  FaBriefcase,
  FaUserGraduate,
  FaLaptopCode,
  FaAward,
  FaUsers,
  FaBuilding,
  FaChartLine,
  FaMedal
} from "react-icons/fa";

function SuccessStories() {

  const [activeCategory, setActiveCategory] = useState("placements");

  const categories = [
    {
      id: "placements",
      icon: <FaBriefcase />,
      title: "Highest Placements",
    },
    {
      id: "student",
      icon: <FaUserGraduate />,
      title: "Student of the Month",
    },
    {
      id: "projects",
      icon: <FaLaptopCode />,
      title: "Best Projects",
    },
    
  ];

  const filteredData = data.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className="success-stories">

      {/* ================= Header ================= */}

      <div className="success-header">

        <span className="heading-line"></span>

        <h1>Success Stories</h1>

        <p>
          Celebrating the achievements of our students in placements,
          innovation, leadership and competitions.
        </p>

      </div>

      {/* ================= Tabs ================= */}

      <div className="success-tabs">

        {categories.map((category) => (

          <button
            key={category.id}
            className={`tab-btn ${
              activeCategory === category.id ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category.id)}
          >

            <span className="tab-icon">

              {category.icon}

            </span>

            {category.title}

          </button>

        ))}

      </div>

      {/* ===================================================
                     HIGHEST PLACEMENTS
      =================================================== */}

      {activeCategory === "placements" && (

        <section className="placement-section">

          <div className="section-title">

            <h2>Highest Placements</h2>

            <button>

              View All →

            </button>

          </div>

          <div className="placement-podium">

            {filteredData
              .sort((a, b) => a.rank - b.rank)
              .map((story) => {

                const medalColor =
                  story.rank === 1
                    ? "#d4af37"
                    : story.rank === 2
                    ? "#c0c0c0"
                    : "#cd7f32";

                return (

                  <div
                    key={story.id}
                    className={`podium-card rank${story.rank}`}
                  >

                    <div
                      className="medal-circle"
                      style={{
                        background: medalColor,
                      }}
                    >

                      <FaMedal />

                      <span>

                        {story.rank}

                      </span>

                    </div>

                    <img
                      src={story.photo}
                      alt={story.name}
                      className="student-photo"
                    />

                    <h3>

                      {story.name}

                    </h3>

                    <p>

                      {story.designation}

                    </p>

                    <img
                      src={story.companyLogo}
                      alt={story.company}
                      className="company-logo"
                    />

                    <h2>

                      {story.package}

                    </h2>

                    <a href="#">

                      View Journey →

                    </a>

                    <div className="podium-base"></div>

                  </div>

                );

              })}

          </div>

        </section>

      )}
      {/* ===================================================
                    STUDENT OF THE MONTH
      =================================================== */}

      {activeCategory === "student" && (

        <section className="student-section">

          <div className="section-title">

            <h2>Student of the Month</h2>

            <button>

              View All →

            </button>

          </div>

          {filteredData.map((story) => (

            <div key={story.id} className="student-highlight">

              <div className="student-left">

                <img
                  src={story.photo}
                  alt={story.name}
                  className="student-photo-large"
                />

              </div>

              <div className="student-right">

                <span className="student-badge">

                  {story.month} Student

                </span>

                <h2>{story.name}</h2>

                <p>
                  Recognized for exceptional academic performance,
                  leadership qualities and contribution towards the
                  institution.
                </p>

                <div className="achievement-grid">

                  {story.points.map((point) => (

                    <div
                      key={point}
                      className="achievement-box"
                    >

                      <FaAward className="achievement-icon" />

                      <span>{point}</span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </section>

      )}

      {/* ===================================================
                       BEST PROJECTS
      =================================================== */}

      {activeCategory === "projects" && (

        <section className="project-section">

          <div className="section-title">

            <h2>Best Projects</h2>

            <button>

              View All →

            </button>

          </div>

          <div className="project-grid">

            {filteredData.map((story) => (

              <div
                key={story.id}
                className="project-card"
              >

                <img
                  src={story.image}
                  alt={story.title}
                  className="project-image"
                />

                <div className="project-content">

                  <h3>{story.title}</h3>

                  <p>
                    Innovative student project developed using
                    modern web technologies with responsive
                    interface and real-world functionality.
                  </p>

                  <div className="tech-stack">

                    {story.tech.map((tech) => (

                      <span key={tech}>

                        {tech}

                      </span>

                    ))}

                  </div>

                  <a href="#">

                    View Project →

                  </a>

                </div>

              </div>

            ))}

          </div>

        </section>

      )}

      

    </section>

  );

}

export default SuccessStories;