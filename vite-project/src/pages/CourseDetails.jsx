import React from "react";
import { useParams } from "react-router-dom";
import data from "./coursedata.json";
import "./CourseDetails.css";

const CourseDetails = () => {
    const { id } = useParams();
    const course = data.find(c => c.id === Number(id));
    if (!course) {
        return <h2>Course Not Found</h2>;
    }
    return (
        <div className="details">
            <h1>{course.title} Roadmap</h1>
            <div className="timeline">
                {course.roadmap.map((item, index) => (
                    <div 
                    className="timeline-item" 
                    key={index}
                    >


                        <div className="circle">
                            {index + 1}
                        </div>



                        <div className="content">

                            <h2>
                                {item.step}
                            </h2>


                            <p>
                                {item.duration}
                            </p>


                        </div>


                    </div>

                ))}


            </div>


        </div>

    );
};


export default CourseDetails;