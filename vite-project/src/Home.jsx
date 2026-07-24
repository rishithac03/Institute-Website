import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import video from "./assets/video.mp4";
import Test from "./Test";
import Colab from "./pages/Colab";
import Testimonials from "./pages/Testimonials";
import Faq from "./pages/Faq";
import Mode from './Mode';
import Trainer from "./pages/Trainers";

const Home = () => {
  const [showDemoCard, setShowDemoCard] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDemoCard(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Demo Popup Card */}
      {showDemoCard && (
        <div className="demo-popup">
          <button
            className="close-btn"
            onClick={() => setShowDemoCard(false)}
          >
            ✖
          </button>

          <div className="demo-content">
            <span className="demo-badge">FREE</span>

            <h2>🎓 Free Demo Class</h2>

            <p>
              Experience our live teaching with a free demo class before
              enrolling. Learn from expert trainers and explore our courses.
            </p>

            <Link to="/demopage">
              <button className="demo-btn">Join Free Demo</button>
            </Link>
          </div>
        </div>
      )}

      <section className="home">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="home-overlay"></div>

        <div className="hero-content">
          <h1>Transform Your Future With Quality Education</h1>

          <p>
            Learn from industry experts with hands-on training,
            live projects, and 100% placement assistance.
          </p>

          <div className="buttons">
            <Link to="/courses">
              <button>Explore Courses</button>
            </Link>

            <Link to="/enroll">
              <button className="enroll-btn">Enroll Now</button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <Test />
      </section>
      <Mode />
      <Colab />
      <Trainer />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Home;