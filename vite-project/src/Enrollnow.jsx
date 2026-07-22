import React, { useState } from "react";
import "./Enrollnow.css";

const Enrollnow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    qualification: "",
    course: "",
    batch: "",
    mode: "",
    address: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("🎉 Enrollment Successful! Our team will contact you soon.");

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      mobile: "",
      qualification: "",
      course: "",
      batch: "",
      mode: "",
      address: "",
      message: "",
      agree: false,
    });
  };

  return (
    <div className="enroll-page">

      <section className="enroll-hero">
        <h1>Enroll Now</h1>
        <p>
          Start your journey towards a successful IT career with our
          industry-oriented training programs.
        </p>
      </section>

      <section className="enroll-container">

        <div className="form-section">

          <h2>Admission Form</h2>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Highest Qualification</label>

              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
              >
                <option value="">Select Qualification</option>
                <option>Intermediate</option>
                <option>Diploma</option>
                <option>B.Tech</option>
                <option>M.Tech</option>
                <option>B.Sc</option>
                <option>MCA</option>
                <option>Others</option>
              </select>
            </div>

            <div className="input-group">
              <label>Select Course</label>

              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Choose Course</option>
                <option>Java Full Stack</option>
                <option>MERN Stack</option>
                <option>Python Full Stack</option>
                <option>Data Science</option>
                <option>AI & Machine Learning</option>
                <option>Cloud Computing</option>
              </select>
            </div>

            <div className="input-group">
              <label>Preferred Batch</label>

              <select
                name="batch"
                value={formData.batch}
                onChange={handleChange}
                required
              >
                <option value="">Choose Batch</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
                <option>Weekend</option>
              </select>
            </div>

            <div className="radio-group">

              <label>Training Mode</label>

              <div className="radio-options">

                <label>
                  <input
                    type="radio"
                    name="mode"
                    value="Offline"
                    checked={formData.mode === "Offline"}
                    onChange={handleChange}
                    required
                  />
                  Offline
                </label>

                <label>
                  <input
                    type="radio"
                    name="mode"
                    value="Online"
                    checked={formData.mode === "Online"}
                    onChange={handleChange}
                  />
                  Online
                </label>

              </div>

            </div>

            <div className="input-group">
              <label>Address</label>

              <textarea
                name="address"
                rows="3"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="input-group">
              <label>Message</label>

              <textarea
                name="message"
                rows="4"
                placeholder="Any Questions?"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="checkbox-group">

              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
              />

              <span>
                I agree to the Terms & Conditions.
              </span>

            </div>

            <button type="submit" className="submit-btn">
              Enroll Now
            </button>

          </form>

        </div>

        <div className="info-section">

          <h2>Why Choose Us?</h2>

          <ul>
            <li>✔ Live Instructor-Led Training</li>
            <li>✔ Real-Time Projects</li>
            <li>✔ Placement Assistance</li>
            <li>✔ Resume Building</li>
            <li>✔ Mock Interviews</li>
            <li>✔ Industry Expert Trainers</li>
            <li>✔ Internship Support</li>
            <li>✔ Course Completion Certificate</li>
          </ul>

          <div className="contact-box">

            <h3>Contact Us</h3>

            <p>📍 Hyderabad, Telangana</p>
            <p>📞 +91 9876543210</p>
            <p>✉️ info@yourinstitute.com</p>
            <p>🕒 Mon - Sat : 9 AM - 7 PM</p>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Enrollnow;