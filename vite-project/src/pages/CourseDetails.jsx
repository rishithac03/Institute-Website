import React from "react";
import { useParams } from "react-router-dom";
import data from "./coursedata.json";
import "./CourseDetails.css";

const CourseDetails = () => {
  const { id } = useParams();

  const course = data.find((c) => c.id === Number(id));

  if (!course) {
    return <h2>Course Not Found</h2>;
  }

  return (
    <div className="course-details-container">
      <h1 className="course-title">
        {course.title} Roadmap
      </h1>

      <div className="roadmap-timeline">
        {course.roadmap.map((item, index) => (
          <div className="roadmap-item" key={index}>

            <div className="roadmap-circle">
              {index + 1}
            </div>

            <div className="roadmap-card">
              <h2>{item.step}</h2>
              <p>{item.duration}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;