import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/about.css";
import img from "../assets/about.png";
import story from "../assets/story.png";
import mission from "../assets/mission.png";
import { FaBullseye, FaEye, FaLaptopCode, FaUserGraduate, FaBriefcase, FaAward, FaLightbulb, FaUsers, FaHandshake, FaRocket, FaCode, FaPaintBrush, FaPython, FaBullhorn} from "react-icons/fa";

const achievements = [
  { number: 500, suffix: "+", title: "Students Trained" },
  { number: 95, suffix: "%", title: "Placement Assistance" },
  { number: 20, suffix: "+", title: "Professional Trainers" },
  { number: 15, suffix: "+", title: "Industry Courses" },
];
const chooseUs = [
  {
    icon: <FaLaptopCode />,
    title: "Practical Training",
    text: "Hands-on learning through real-time projects."
  },
  {
    icon: <FaBriefcase />,
    title: "Industry Mentors",
    text: "Learn directly from experienced professionals."
  },
  {
    icon: <FaAward />,
    title: "Placement Support",
    text: "Career guidance with interview preparation."
  },
  {
    icon: <FaRocket />,
    title: "Career Growth",
    text: "Build confidence and industry-ready skills."
  }
];

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const increment = end / (duration / 20);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end; 
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 20);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <h2>
      {count}
      {suffix}
    </h2>
  );
}

const About = () => {
  return (
    <div className="about-page">
      <section className="about-banner">
        <div className="container">
          <div className="banner-left">
            <h1 className="breadcrumb"> About Us </h1>
            <p>We ignite potential by transforming ambition into tangible achievement, bridging the gap between classroom theory and real-world mastery. Our sanctuary of learning breathes life into knowledge through hands-on practice, cultivating the sharp intellects and industry-ready skills demanded by tomorrow’s marketplace. With a compass of dedicated mentorship and professional career guidance, we empower students to rise above competition, unlock their highest purpose, and carve a brilliant path to enduring success.</p>
          </div>
          <div className="banner-right">
            <img src={img} alt="About" />
          </div>
        </div>
      </section>

      <section className="story">
        <div className="container">
          <div className="story-image">
            <img src={story} alt="Story" />
          </div>
          <div className="story-content">
            <span className="section-tag"> OUR STORY </span>
            <h2> Transforming Education Into Careers </h2>
            <p>
              Our institute was established with one mission —
              bridging the gap between classroom education and
              industry expectations.
            </p>
            <p>
              Through practical learning, live projects,
              expert mentorship, and career guidance,
              we prepare students for real opportunities.
            </p>

            <div className="timeline">
              <div>
                <span>2020</span>
                <p>Institute Started</p>
              </div>
              <div>
                <span>2022</span>
                <p>300+ Students</p>
              </div>
              <div>
                <span>2024</span>
                <p>Industry Partnerships</p>
              </div>
              <div>
                <span>Today</span>
                <p>Growing Every Day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-card">
              <FaBullseye />
              <h3>Our Mission</h3>
              <p>
                Deliver industry-ready education through
                practical learning experiences.
              </p>
            </div>
            <div className="mission-card">
              <FaEye />
              <h3>Our Vision</h3>
              <p>
                Shape future professionals who lead
                innovation with confidence and integrity.
              </p>
            </div>
          </div>
           <div className="mission-image">
            <img src={mission} alt="Mission" />
          </div>
        </div>
      </section>

      <section className="achievements">
        <div className="container">
          <h2 className="section-title"> Our Achievements </h2>
          <div className="achievement-grid">
            {achievements.map((item, index) => (
              <div className="achievement-card" key={index} >
                <Counter end={item.number} suffix={item.suffix} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="choose">
        <div className="container">
          <h2 className="section-title"> Why Choose Us </h2>
          <div className="choose-grid">
            {chooseUs.map((item, index) => (
              <div className="choose-card" key={index} >
                <div className="icon"> {item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2> Ready to Start Your Career Journey? </h2>
            <p> Join our institute and gain the practical skills required to succeed in today's industry. </p>
            <NavLink to="/courses" className="explore-btn"> Explore Courses </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;