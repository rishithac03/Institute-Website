import { useMemo, useState } from "react";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import trainers from "../pages/data/trainers.json";
import "../styles/trainers.css";

const Trainer = () => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredTrainers = useMemo(() => {
        return trainers.filter((trainer) => {
            const value = search.toLowerCase();

            return (
                trainer.name.toLowerCase().includes(value) ||
                trainer.designation.toLowerCase().includes(value) ||
                trainer.skills.some((skill) =>
                    skill.toLowerCase().includes(value)
                ) ||
                trainer.courses.some((course) =>
                    course.toLowerCase().includes(value)
                )
            );
        });
    }, [search]);
    
    const trainersPerPage = 3;
    const indexOfLastTrainer = currentPage * trainersPerPage;
    const indexOfFirstTrainer = indexOfLastTrainer - trainersPerPage;
    const currentTrainers = filteredTrainers.slice(indexOfFirstTrainer, indexOfLastTrainer);
    const totalPages = Math.ceil(filteredTrainers.length / trainersPerPage);

    return (
        <section className="trainer-page">
            {/* ================= Hero ================= */}

            <section className="trainer-hero">
                <p className="trainer-tag">MEET OUR TRAINERS</p>

                <h1>
                    Learn From <span>Industry Experts</span>
                </h1>

                <p className="trainer-description">
                    Our experienced trainers combine industry knowledge with practical
                    teaching to help students build real-world skills, confidence, and
                    successful careers in software development.
                </p>

                {/* <div className="trainer-search">
                    <FaSearch className="trainer-search-icon" />

                    <input
                        type="text"
                        placeholder="Search trainer, course or skill..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div> */}
            </section>

            {/* ================= Trainer Grid ================= */}

            <section className="trainer-grid">

                {currentTrainers.length > 0 ? (
                    currentTrainers.map((trainer) => (
                        <div
                            className="trainer-card"
                            key={trainer.id}
                        >
                            <div className="trainer-image-wrapper">
                                <img
                                    src={trainer.image}
                                    alt={trainer.name}
                                    className="trainer-image"
                                />

                                <span className="trainer-experience">
                                    {trainer.experience}
                                </span>
                            </div>

                            <div className="trainer-content">
                                <h3>{trainer.name}</h3>

                                <p className="trainer-designation">
                                    {trainer.designation}
                                </p>

                                <div className="trainer-course-list">
                                    {trainer.courses.map((course, index) => (
                                        <span
                                            key={index}
                                            className="trainer-course"
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>

                                <div className="trainer-skills">
                                    {trainer.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="trainer-skill"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <button className="trainer-profile-btn">
                                    View Profile
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="trainer-empty">
                        <h2>No Trainers Found</h2>

                        <p>
                            Try searching with a different trainer name, technology,
                            or course.
                        </p>
                    </div>
                )}
                <div className="trainer-pagination">
                    {Array.from( { length: totalPages }, (_, index) => (
                            <button key={index} onClick={() => setCurrentPage(index + 1)} className={`trainer-dot ${currentPage === index + 1 ? "active" : "" }`}/>
                        )
                    )}
                </div>
            </section>
            {/* ================= Bottom CTA ================= */}

            <section className="trainer-cta">

                <h2>
                    Ready to Learn From the <span>Best Trainers?</span>
                </h2>

                <p>
                    Join our industry-focused training programs and build the skills
                    employers are looking for.
                </p>

                <div className="trainer-cta-buttons">

                    <button className="trainer-primary-btn">
                        Explore Courses
                    </button>

                    <button className="trainer-secondary-btn">
                        Contact Us
                    </button>

                </div>

            </section>
        </section>
    );
};

export default Trainer;