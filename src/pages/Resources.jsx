import React, { useState } from "react";
import "./Resources.css";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

import {
  FaFilePdf,
  FaVideo,
  FaBookOpen,
  FaLock,
  FaDownload,
  FaSearch,
} from "react-icons/fa";

const Resources = () => {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const resources = [

    {
      id:1,
      title:"React Complete Notes",
      description:"Complete React Notes from Beginner to Advanced.",
      category:"React",
      premium:true,
      icon:<FaFilePdf />
    },

    {
      id:2,
      title:"Java Full Stack Notes",
      description:"Java, JDBC, Servlets and Spring Boot.",
      category:"Java",
      premium:true,
      icon:<FaBookOpen />
    },

    {
      id:3,
      title:"Python Interview Questions",
      description:"Top 300 Python Interview Questions.",
      category:"Python",
      premium:true,
      icon:<FaFilePdf />
    },

    {
      id:4,
      title:"HTML & CSS Notes",
      description:"Frontend Basics PDF.",
      category:"Frontend",
      premium:false,
      icon:<FaFilePdf />
    },

    {
      id:5,
      title:"JavaScript Cheat Sheet",
      description:"Quick Revision Notes.",
      category:"JavaScript",
      premium:false,
      icon:<FaFilePdf />
    },

    {
      id:6,
      title:"React Projects",
      description:"10 Real Time React Projects.",
      category:"Projects",
      premium:true,
      icon:<FaVideo />
    },

    {
      id:7,
      title:"Resume Templates",
      description:"ATS Friendly Resume Templates.",
      category:"Resume",
      premium:true,
      icon:<FaDownload />
    },

    {
      id:8,
      title:"Aptitude Questions",
      description:"Placement Preparation.",
      category:"Placement",
      premium:true,
      icon:<FaBookOpen />
    }

  ];

  const filteredResources = resources.filter((item)=>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleOpen=(item)=>{

      if(item.premium){

          setShowPopup(true);

      }

      else{

          alert(`Opening ${item.title}`);

      }

  };

  return(

<>

<div className="resources-page">

<h1>Learning Resources</h1>

<p>

Download Notes, PPTs, Interview Questions,
Projects and Study Materials.

</p>

<div className="search-box">

<FaSearch className="search-icon"/>

<input

type="text"

placeholder="Search Resources..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

</div>

<div className="resource-list">

{

filteredResources.map((item)=>(

<div className="resource-card" key={item.id}>

<div className="left-section">

<div className="resource-icon">

{item.icon}

</div>

<div>

<h2>{item.title}</h2>

<p>{item.description}</p>

<span>

{item.category}

</span>

</div>

</div>

<div className="right-section">

{

item.premium ?

<div className="premium">

<FaLock/>

Premium

</div>

:

<div className="free">

FREE

</div>

}

<button

onClick={()=>handleOpen(item)}

>

Open Resource

</button>

</div>

</div>

))

}

</div>
      {/* Premium Access Popup */}

      {showPopup && (

        <div className="popup-overlay">

          <div className="popup">

            <div className="popup-header">

              <div className="popup-lock">
                🔒
              </div>

              <h2>Premium Resource</h2>

            </div>

            <p>

              This resource is available only for
              <strong> registered OfferEra students.</strong>

            </p>

            <div className="popup-features">

              <div>📘 Complete Notes</div>
              <div>🎥 Video Tutorials</div>
              <div>💻 Real-Time Projects</div>
              <div>📄 Interview Questions</div>
              <div>📝 Mock Tests</div>
              <div>🏆 Placement Materials</div>

            </div>

            <div className="popup-buttons">

              <button
                className="register-btn"
                onClick={() => navigate("/register")}
              >
                Register Now
              </button>

              <button
                className="close-btn"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

</div>

</>

  );

};

export default Resources;