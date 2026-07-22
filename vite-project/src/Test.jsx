import React, { useEffect, useState } from "react";

const Test = () => {

  const [students, setStudents] = useState(0);
  const [courses, setCourses] = useState(0);
  const [placement, setPlacement] = useState(0);


  const animate = (setter, value) => {

    let start = 0;

    const timer = setInterval(() => {

      start += Math.ceil(value / 100);

      if (start >= value) {
        setter(value);
        clearInterval(timer);
      } else {
        setter(start);
      }

    }, 20);

  };


  useEffect(() => {
    animate(setStudents,5000);
    animate(setCourses,25);
    animate(setPlacement,95);
  }, []);



  const cardStyle = {

    width:"230px",
    height:"170px",
    padding:"25px",

    background:"rgba(255,255,255,0.12)",
    backdropFilter:"blur(10px)",

    border:"1px solid rgba(255,255,255,0.3)",
    borderRadius:"20px",

    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",

    color:"white",

    boxShadow:"0 15px 35px rgba(0,0,0,0.4)",

    transition:"0.4s",

    cursor:"pointer"
  };


  return (

    <section
      style={{

        minHeight:"280px",

        width:"100%",

        background:
        "linear-gradient(120deg,#050505,#1a1a1a,#ff6600)",

        display:"flex",

        justifyContent:"center",

        alignItems:"center",

        gap:"40px",

        flexWrap:"wrap",

        padding:"50px 20px",

      }}
    >


      <div style={cardStyle}
      onMouseEnter={(e)=>
        e.currentTarget.style.transform="translateY(-12px)"
      }
      onMouseLeave={(e)=>
        e.currentTarget.style.transform="translateY(0)"
      }
      >

        <h1 style={{
          fontSize:"50px",
          margin:"0",
          color:"#ff9800",
          fontWeight:"800"
        }}>
          {students}+
        </h1>

        <p style={{
          fontSize:"18px",
          letterSpacing:"1px"
        }}>
          Students Trained
        </p>

      </div>



      <div style={cardStyle}

      onMouseEnter={(e)=>
        e.currentTarget.style.transform="translateY(-12px)"
      }

      onMouseLeave={(e)=>
        e.currentTarget.style.transform="translateY(0)"
      }

      >

        <h1 style={{
          fontSize:"50px",
          margin:"0",
          color:"#ff9800",
          fontWeight:"800"
        }}>
          {courses}+
        </h1>


        <p style={{
          fontSize:"18px",
          letterSpacing:"1px"
        }}>
          Professional Courses
        </p>


      </div>




      <div style={cardStyle}

      onMouseEnter={(e)=>
        e.currentTarget.style.transform="translateY(-12px)"
      }

      onMouseLeave={(e)=>
        e.currentTarget.style.transform="translateY(0)"
      }

      >

        <h1 style={{
          fontSize:"50px",
          margin:"0",
          color:"#ff9800",
          fontWeight:"800"
        }}>
          {placement}%
        </h1>


        <p style={{
          fontSize:"18px",
          letterSpacing:"1px"
        }}>
          Placement Success
        </p>


      </div>


    </section>

  );
};


export default Test;