import React, { useState } from "react";
import './JobsPrediction.css';

const JobPrediction = () => {
  const [skills, setSkills] = useState("");
  const [result, setResult] = useState(null);

  const predictJob = () => {
    const skill = skills.toLowerCase();

    if (
      skill.includes("react") ||
      skill.includes("html") ||
      skill.includes("css") ||
      skill.includes("javascript")
    ) {
      setResult({
        role: "Frontend Developer",
        salary: "₹4 - ₹7 LPA",
        match: "95%",
        companies: "Infosys, TCS, Accenture, Deloitte",
      });
    } else if (
      skill.includes("node") ||
      skill.includes("express") ||
      skill.includes("mongodb")
    ) {
      setResult({
        role: "MERN Stack Developer",
        salary: "₹5 - ₹8 LPA",
        match: "93%",
        companies: "Tech Mahindra, Capgemini, Cognizant",
      });
    } else if (
      skill.includes("java") ||
      skill.includes("spring")
    ) {
      setResult({
        role: "Java Full Stack Developer",
        salary: "₹5 - ₹9 LPA",
        match: "94%",
        companies: "Infosys, Wipro, IBM",
      });
    } else if (
      skill.includes("python") &&
      !skill.includes("machine")
    ) {
      setResult({
        role: "Python Developer",
        salary: "₹4 - ₹7 LPA",
        match: "90%",
        companies: "TCS, HCL, Cognizant",
      });
    } else if (
      skill.includes("machine") ||
      skill.includes("tensorflow") ||
      skill.includes("pytorch")
    ) {
      setResult({
        role: "AI / ML Engineer",
        salary: "₹7 - ₹12 LPA",
        match: "97%",
        companies: "Google, Microsoft, Amazon",
      });
    } else if (
      skill.includes("aws") ||
      skill.includes("docker") ||
      skill.includes("kubernetes")
    ) {
      setResult({
        role: "DevOps Engineer",
        salary: "₹6 - ₹10 LPA",
        match: "92%",
        companies: "IBM, Oracle, Accenture",
      });
    } else if (
      skill.includes("selenium")
    ) {
      setResult({
        role: "Automation Tester",
        salary: "₹4 - ₹6 LPA",
        match: "91%",
        companies: "Capgemini, Infosys",
      });
    } else if (
      skill.includes("figma")
    ) {
      setResult({
        role: "UI / UX Designer",
        salary: "₹4 - ₹7 LPA",
        match: "90%",
        companies: "Zoho, Freshworks",
      });
    } else {
      setResult({
        role: "No Suitable Prediction",
        salary: "-",
        match: "0%",
        companies: "Please enter valid technical skills.",
      });
    }
  };

  return (
    <div className="prediction">

      <h1>🎯 Job Prediction</h1>

      <p>
        Enter your technical skills and find the best career opportunity.
      </p>

      <input
        type="text"
        placeholder="Example: React, HTML, CSS, JavaScript"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />

      <button onClick={predictJob}>
        Predict Job
      </button>

      {result && (
        <div className="result">

          <h2>{result.role}</h2>

          <p><b>Match Score :</b> {result.match}</p>

          <p><b>Expected Salary :</b> {result.salary}</p>

          <p><b>Top Companies :</b> {result.companies}</p>

        </div>
      )}

    </div>
  );
};

export default JobPrediction;