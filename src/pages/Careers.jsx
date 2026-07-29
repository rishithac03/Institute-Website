import React, { useState } from "react";
import jobs from "./jobs.json";
import "./Careers.css"

const Careers = () => {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter(
    (job) =>
      job.role.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="career">

      <div className="career-heading">
        <h1>Career Opportunities</h1>
        <p>
          Discover the latest job openings, internships, and placement
          opportunities with top companies.
        </p>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search by Role, Company or Location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h3 className="results">
        {filteredJobs.length} Jobs Available
      </h3>

      <div className="job-grid">

        {filteredJobs.map((job) => (
          <div className="job-card" key={job.id}>

            <h2>{job.role}</h2>

            <h3>{job.company}</h3>

            <p>📍 <b>Location:</b> {job.location}</p>
            <p>💼 <b>Type:</b> {job.type}</p>
            <p>💰 <b>Salary:</b> {job.salary}</p>
            <p>🎓 <b>Experience:</b> {job.experience}</p>
            <p>🛠 <b>Skills:</b> {job.skills}</p>

            <button>Apply Now</button>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Careers;