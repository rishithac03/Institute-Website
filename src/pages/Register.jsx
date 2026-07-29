import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const courseData = {
    "React Development": { fee: 8999, duration: "3 Months" },
    "Java Full Stack": { fee: 24999, duration: "6 Months" },
    "Python Full Stack": { fee: 22999, duration: "6 Months" },
    "MERN Stack": { fee: 27999, duration: "6 Months" },
    "Data Science": { fee: 34999, duration: "8 Months" },
    "AI & Machine Learning": { fee: 39999, duration: "8 Months" },
    "AWS Cloud": { fee: 19999, duration: "4 Months" },
    "DevOps": { fee: 24999, duration: "5 Months" },
  };

  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    email: "",
    mobile: "",
    alternateMobile: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    qualification: "",
    college: "",
    university: "",
    branch: "",
    year: "",
    passout: "",
    cgpa: "",
    course: "",
    duration: "",
    fee: 0,
    batch: "",
    mode: "",
  });

  const [skills, setSkills] = useState([]);
  const [paid, setPaid] = useState(false);

  const skillList = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Java",
    "Python",
    "SQL",
    "Node.js",
    "Express",
    "MongoDB",
    "Machine Learning",
    "AI",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "course") {
      setFormData({
        ...formData,
        course: value,
        duration: courseData[value].duration,
        fee: courseData[value].fee,
      });
      setPaid(false);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSkill = (skill) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };

  const handlePayment = () => {
    setPaid(true);
    alert("Payment Successful");
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!paid) {
      alert("Please complete payment first.");
      return;
    }

    alert("Registration Successful!");
    console.log(formData);
    console.log(skills);
  };

  return (
    <div className="register-container">

      <form className="register-form" onSubmit={handleRegister}>

        <h1>Course Registration</h1>

        {/* PERSONAL DETAILS */}

        <h2>Personal Details</h2>

        <div className="grid">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="fatherName"
            placeholder="Father Name"
            value={formData.fatherName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="motherName"
            placeholder="Mother Name"
            value={formData.motherName}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="alternateMobile"
            placeholder="Alternate Mobile"
            value={formData.alternateMobile}
            onChange={handleChange}
          />

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

        </div>

        {/* ADDRESS */}

        <h2>Address</h2>

        <div className="grid">

          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
          />

          <input
            type="text"
            name="pincode"
            placeholder="PIN Code"
            value={formData.pincode}
            onChange={handleChange}
          />

        </div>
                {/* EDUCATION DETAILS */}

        <h2>Educational Details</h2>

        <div className="grid">

          <select
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          >
            <option value="">Qualification</option>
            <option>Intermediate</option>
            <option>Diploma</option>
            <option>B.Tech</option>
            <option>B.Sc</option>
            <option>BCA</option>
            <option>M.Tech</option>
            <option>MCA</option>
          </select>

          <input
            type="text"
            name="college"
            placeholder="College Name"
            value={formData.college}
            onChange={handleChange}
          />

          <input
            type="text"
            name="university"
            placeholder="University"
            value={formData.university}
            onChange={handleChange}
          />

          <input
            type="text"
            name="branch"
            placeholder="Branch"
            value={formData.branch}
            onChange={handleChange}
          />

          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
          >
            <option value="">Current Year</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>Final Year</option>
            <option>Passed Out</option>
          </select>

          <input
            type="number"
            name="passout"
            placeholder="Passout Year"
            value={formData.passout}
            onChange={handleChange}
          />

          <input
            type="text"
            name="cgpa"
            placeholder="CGPA / Percentage"
            value={formData.cgpa}
            onChange={handleChange}
          />

        </div>

        {/* SKILLS */}

        <h2>Skills</h2>

        <div className="skills-container">

          {skillList.map((skill) => (
            <label key={skill} className="skill-item">

              <input
                type="checkbox"
                checked={skills.includes(skill)}
                onChange={() => handleSkill(skill)}
              />

              {skill}

            </label>
          ))}

        </div>

        {/* COURSE DETAILS */}

        <h2>Course Details</h2>

        <div className="grid">

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>

            {Object.keys(courseData).map((course) => (
              <option key={course}>{course}</option>
            ))}

          </select>

          <input
            type="text"
            value={formData.duration}
            placeholder="Course Duration"
            readOnly
          />

          <input
            type="text"
            value={
              formData.fee
                ? `₹ ${formData.fee.toLocaleString()}`
                : ""
            }
            placeholder="Course Fee"
            readOnly
          />

          <select
            name="batch"
            value={formData.batch}
            onChange={handleChange}
          >
            <option value="">Batch Timing</option>
            <option>Morning (9 AM - 11 AM)</option>
            <option>Afternoon (1 PM - 3 PM)</option>
            <option>Evening (6 PM - 8 PM)</option>
            <option>Weekend</option>
          </select>

          <select
            name="mode"
            value={formData.mode}
            onChange={handleChange}
          >
            <option value="">Training Mode</option>
            <option>Online</option>
            <option>Offline</option>
            <option>Hybrid</option>
          </select>

        </div>

        {/* PAYMENT */}

        <h2>Payment</h2>

        <div className="payment-box">

          <h3>
            Course Fee :
            <span>
              ₹ {formData.fee.toLocaleString()}
            </span>
          </h3>

          <h3>
            Payment Status :

            {paid ? (
              <span
                style={{
                  color: "green",
                  marginLeft: "10px",
                }}
              >
                ✅ PAID
              </span>
            ) : (
              <span
                style={{
                  color: "red",
                  marginLeft: "10px",
                }}
              >
                ❌ NOT PAID
              </span>
            )}
          </h3>

          <button
            type="button"
            className="pay-btn"
            disabled={paid || formData.fee === 0}
            onClick={handlePayment}
          >
            {paid
              ? "✔ Payment Completed"
              : `Pay ₹${formData.fee.toLocaleString()}`}
          </button>

        </div>
                {/* DECLARATION */}

        <h2>Declaration</h2>

        <div className="declaration">

          <label>
            <input type="checkbox" required />
            I hereby declare that all the information provided above is true and correct.
          </label>

          <label>
            <input type="checkbox" required />
            I agree to the Terms & Conditions and Privacy Policy.
          </label>

        </div>

        {/* BUTTONS */}

        <div className="button-group">

          <button
            type="reset"
            className="reset-btn"
          >
            Reset
          </button>

          <button
            type="submit"
            className="register-btn"
            disabled={!paid}
          >
            Register
          </button>

        </div>

      </form>

    </div>
  );
};

export default Register;