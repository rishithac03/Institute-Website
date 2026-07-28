import React, { useState } from "react";
import { FaLaptopCode, FaUniversity, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseModes = () => {
  // State to track which card is being hovered
  const [hover, setHover] = useState(null);

  // Course Data
  const courses = [
    {
      id: 1,
      title: "Online Training",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      icon: <FaLaptopCode />,
      color: "#2563eb",
      text: "Learn from anywhere with live classes, projects and expert guidance.",
    },
    {
      id: 2,
      title: "Offline Classroom",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      icon: <FaUniversity />,
      color: "#f97316",
      text: "Practical classroom learning with trainers, labs and career support.",
    },
  ];

  return (
    // ===========================
    // Main Section
    // ===========================
    <section
      style={{
        padding: "50px 6%",
        background: "linear-gradient(#1a1a1a,#ff6600,120deg,#050505)",
      }}
    >
      {/* ===========================
          Heading Section
      =========================== */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "35px",
        }}
      >
        <h2
          style={{
            color: "#1e293b",
            fontSize: "45px",
          }}
        >
          Choose Learning Mode
        </h2>

        <p
          style={{
            color: "#64748b",
          }}
        >
          Learn online or offline with industry experts
        </p>
      </div>

      {/* ===========================
          Cards Container
          (Reduced Width)
      =========================== */}
      <div
        style={{
<<<<<<< HEAD
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(280px,480px))",
          justifyContent:"center",
          gap:"25px"
=======
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,480px))",
          justifyContent: "center", // Keeps cards centered
          gap: "25px",
>>>>>>> d12f082461f94b17a28a3a889f2a47b1ebba917d
        }}
      >
        {courses.map((course) => (
          // ===========================
          // Individual Card
          // ===========================
          <div
            key={course.id}
            onMouseEnter={() => setHover(course.id)}
            onMouseLeave={() => setHover(null)}
            style={{
              background: "#fff",

              borderRadius: "20px",

              overflow: "hidden",

              transition: "0.4s",

              transform:
                hover === course.id
                  ? "translateY(-10px)"
                  : "translateY(0)",

              border:
                hover === course.id
                  ? "2px solid orange"
                  : "2px solid transparent",

              boxShadow:
                hover === course.id
                  ? "0 20px 40px rgba(0,0,0,.15)"
                  : "0 8px 20px rgba(0,0,0,.08)",
            }}
          >
            {/* ===========================
                Course Image
            =========================== */}
            <img
              src={course.image}
              alt={course.title}
              style={{
                width: "100%",

                height: "150px",

                objectFit: "cover",

                transition: "0.4s",

                transform:
                  hover === course.id
                    ? "scale(1.08)"
                    : "scale(1)",
              }}
            />

            {/* ===========================
                Card Content
            =========================== */}
            <div
              style={{
                padding: "25px",
              }}
            >
              {/* Icon + Title */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                {/* Course Icon */}
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: course.color,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "25px",
                  }}
                >
                  {course.icon}
                </div>

                {/* Course Title */}
                <h3
                  style={{
                    color: "#1e293b",
                  }}
                >
                  {course.title}
                </h3>
              </div>

              {/* Course Description */}
              <p
                style={{
                  color: "#64748b",
                  lineHeight: "25px",
                  marginTop: "15px",
                }}
              >
                {course.text}
              </p>

              {/* ===========================
                  View Courses Button
              =========================== */}
              <Link
                to="/courses"
                style={{
                  textDecoration: "none",
                }}
              >
                <button
                  style={{
                    marginTop: "15px",

                    width: "100%",

                    padding: "12px",

                    border: "none",

                    borderRadius: "30px",

                    background: course.color,

                    color: "#fff",

                    fontWeight: "bold",

                    cursor: "pointer",

                    display: "flex",

                    justifyContent: "center",

                    alignItems: "center",

                    gap: "8px",
                  }}
                >
                  View Courses
                  <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseModes;