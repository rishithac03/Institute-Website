import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import video from "./assets/video.mp4";
import CountUp from "react-countup";
import Test from "./Test";
console.log("CountUp:", CountUp);
const Home = () => {



    
  return (
    <div>
    <div style={{border:"1px solid black",height:"100px",width:"auto"}}>

        </div>
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

      <div className="overlay"></div>

      <div className="content">
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
    <section style={{border:"3px solid linear-gradient(120deg,#050505,#1a1a1a,#ff6600)",height:"50px",width:"auto"}}>
<Test/>
    </section>
    
    </div>
  );
};

export default Home;