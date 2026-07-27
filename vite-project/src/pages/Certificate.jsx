import React, { useState } from "react";
import "./Certificate.css";
import { jsPDF } from "jspdf";

const Certificate = () => {

  const [registered, setRegistered] = useState(false);

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const [certificate, setCertificate] = useState({
    studentName: "",
    courseName: "",
    duration: "",
    completionDate: "",
    grade: "",
    certificateNo: "",
    instructor: "",
  });

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCertificateChange = (e) => {
    setCertificate({
      ...certificate,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = () => {

    if (
      !registerData.name ||
      !registerData.email ||
      !registerData.phone ||
      !registerData.course
    ) {
      alert("Please fill all details.");
      return;
    }

    const id =
      "OFR" +
      Math.floor(Math.random() * 1000000);

    setCertificate({
      studentName: registerData.name,
      courseName: registerData.course,
      duration: "",
      completionDate: "",
      grade: "",
      certificateNo: id,
      instructor: "",
    });

    setRegistered(true);
  };

  const generatePDF = () => {

    if (
      !certificate.studentName ||
      !certificate.courseName ||
      !certificate.duration ||
      !certificate.completionDate ||
      !certificate.grade
    ) {
      alert("Please fill all certificate details.");
      return;
    }

    const doc = new jsPDF("landscape");

    doc.setFillColor(255,248,235);
    doc.rect(0,0,297,210,"F");

    doc.setDrawColor(255,119,0);
    doc.setLineWidth(2);
    doc.rect(10,10,277,190);

    doc.setFont("times","bold");
    doc.setTextColor(255,119,0);
    doc.setFontSize(28);

    doc.text(
      "OfferEra Institute",
      148,
      28,
      {align:"center"}
    );

    doc.setTextColor(0);

    doc.setFontSize(22);

    doc.text(
      "CERTIFICATE OF COMPLETION",
      148,
      45,
      {align:"center"}
    );

    doc.setFontSize(15);

    doc.text(
      "This Certificate is Proudly Presented To",
      148,
      68,
      {align:"center"}
    );

    doc.setTextColor(0,70,150);

    doc.setFontSize(30);

    doc.text(
      certificate.studentName.toUpperCase(),
      148,
      90,
      {align:"center"}
    );

    doc.setTextColor(0);

    doc.setFontSize(15);

    doc.text(
      "For Successfully Completing",
      148,
      110,
      {align:"center"}
    );

    doc.setTextColor(255,119,0);

    doc.setFontSize(20);

    doc.text(
      certificate.courseName,
      148,
      125,
      {align:"center"}
    );

    doc.setTextColor(0);

    doc.setFontSize(14);

    doc.text(
      `Duration : ${certificate.duration}`,
      35,
      155
    );

    doc.text(
      `Grade : ${certificate.grade}`,
      35,
      168
    );

    doc.text(
      `Completion Date : ${certificate.completionDate}`,
      35,
      181
    );

    doc.text(
      `Certificate No : ${certificate.certificateNo}`,
      180,
      181
    );

    doc.line(35,188,90,188);
    doc.text("Instructor",48,196);

    doc.line(205,188,260,188);
    doc.text("Director",222,196);

    doc.save(
      `${certificate.studentName}_Certificate.pdf`
    );

  };

  return (

    <div className="certificate-page">
        {!registered ? (

<div className="register-container">

    <div className="register-card">

        <h1>Student Registration</h1>

        <p>
            Register first to generate your certificate.
        </p>

        <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={registerData.name}
            onChange={handleRegisterChange}
        />

        <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={registerData.email}
            onChange={handleRegisterChange}
        />

        <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={registerData.phone}
            onChange={handleRegisterChange}
        />

        <select
            name="course"
            value={registerData.course}
            onChange={handleRegisterChange}
        >
            <option value="">Select Course</option>
            <option>Java Full Stack</option>
            <option>MERN Stack</option>
            <option>Python Full Stack</option>
            <option>Data Science</option>
            <option>Machine Learning</option>
        </select>

        <button
            className="register-btn"
            onClick={handleRegister}
        >
            Register
        </button>

    </div>

</div>

) : (

<div className="certificate-container">

    <div className="left-panel">

        <h2>Certificate Details</h2>

        <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={certificate.studentName}
            onChange={handleCertificateChange}
        />

        <input
            type="text"
            name="courseName"
            placeholder="Course Name"
            value={certificate.courseName}
            onChange={handleCertificateChange}
        />

        <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={certificate.duration}
            onChange={handleCertificateChange}
        />

        <input
            type="date"
            name="completionDate"
            value={certificate.completionDate}
            onChange={handleCertificateChange}
        />

        <input
            type="text"
            name="grade"
            placeholder="Grade"
            value={certificate.grade}
            onChange={handleCertificateChange}
        />

        <input
            type="text"
            name="certificateNo"
            value={certificate.certificateNo}
            readOnly
        />

        <input
            type="text"
            name="instructor"
            placeholder="Instructor"
            value={certificate.instructor}
            onChange={handleCertificateChange}
        />

        <button
            className="pdf-btn"
            onClick={generatePDF}
        >
            Download Certificate
        </button>

    </div>

    <div className="right-panel">

        <div className="certificate-preview">

            <h4>OfferEra Institute</h4>

            <h1>CERTIFICATE</h1>

            <h3>OF COMPLETION</h3>

            <p>
                This Certificate is Proudly Presented To
            </p>

            <h2>
                {certificate.studentName || "Student Name"}
            </h2>

            <p>
                For Successfully Completing
            </p>

            <h3 className="course">
                {certificate.courseName || "Course Name"}
            </h3>

            <div className="details">

                <div>
                    <b>Duration</b>
                    <span>
                        {certificate.duration || "------"}
                    </span>
                </div>

                <div>
                    <b>Grade</b>
                    <span>
                        {certificate.grade || "A+"}
                    </span>
                </div>

                <div>
                    <b>Date</b>
                    <span>
                        {certificate.completionDate || "--/--/----"}
                    </span>
                </div>

            </div>

            <div className="certificate-id">

                Certificate No :
                <strong>
                    {certificate.certificateNo}
                </strong>

            </div>

            <div className="signatures">

                <div>
                        Arun kumar
                    ______________________

                    <p>

                        {certificate.instructor || "Instructor"}

                    </p>

                </div>

                <div>
                          Mahesh
                    ______________________
                    <p>Director</p>
                </div>
            </div>
        </div>
    </div>
</div>
)}
    </div>
  );
};

export default Certificate;