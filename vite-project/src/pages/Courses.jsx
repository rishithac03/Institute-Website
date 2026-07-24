import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import courses from "./course.json";
import "./Courses.css";

const Courses = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="courses">

      <div className="heading">
        <h1>Explore Our Courses</h1>

        <p>
          Learn from industry experts with live projects,
          certifications, and placement assistance.
        </p>
      </div>

      {/* Search Bar */}
      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search Courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <p className="result-count">
        Showing {filteredCourses.length} Courses
      </p>

      <div className="course-grid">

        {filteredCourses.map((course) => (

          <div className="course-card" key={course.id}>

            <img src={course.image} alt={course.title} />

            <h2>{course.title}</h2>

            <p>⭐ {course.rating}</p>
            <p>⏳ {course.duration}</p>
            <p>👨‍🏫 {course.trainer}</p>
            <p>📂 {course.projects}</p>
            <p>💼 {course.placement}</p>
            <p>📜 {course.certificate}</p>
            <p>💰 {course.fees}</p>

            <button
              onClick={() => navigate(`/course/${course.id}`)}
            >
              View Details
            </button>
            <button
              onClick={() => navigate('/demopage')}
            >
              Demo Class
            </button>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Courses;