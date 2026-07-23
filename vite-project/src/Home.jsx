import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import video from "./assets/video.mp4";
import Test from "./Test";
import Colab from './pages/Colab'
const Home = () => {

  return (
    <div>

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

          <h1>
            Transform Your Future With Quality Education
          </h1>


          <p>
            Learn from industry experts with hands-on training,
            live projects, and 100% placement assistance.
          </p>


          <div className="buttons">

            <Link to="/courses">
              <button>
                Explore Courses
              </button>
            </Link>


            <Link to="/enroll">
              <button className="enroll-btn">
                Enroll Now
              </button>
            </Link>


          </div>


        </div>


      </section>



      <section>

        <Test/>

      </section>

<Colab/>
    </div>
  );
};


export default Home;