import "../styles/contact.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaUser,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdMessage } from "react-icons/md";
import { BsBook } from "react-icons/bs";
const Contact = () => {
  return (
    <section className="contact-page">

      {/* Hero */}
      <div className="contact-hero">
        <p className="contact-tag">GET IN TOUCH</p>

        <h1>
          Let's Start Your <span>Career Journey</span>
        </h1>

        <p className="contact-desc">
          Have questions about admissions, courses or placements?
          We'd love to hear from you. Fill out the form and our team
          will get back to you shortly.
        </p>

        <div className="hero-highlights">

          <div className="highlight">
            <div className="icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h4>24/7 Support</h4>
              <p>Always ready to help</p>
            </div>
          </div>

          <div className="highlight">
            <div className="icon">
              <BsBook />
            </div>

            <div>
              <h4>Course Guidance</h4>
              <p>Choose the right career path</p>
            </div>
          </div>

          <div className="highlight">
            <div className="icon">
              <FaUser />
            </div>

            <div>
              <h4>Placement Support</h4>
              <p>100% Assistance</p>
            </div>
          </div>

        </div>
      </div>

      {/* Contact Section */}

      <div className="contact-container">

        {/* Left */}

        <div className="contact-left">

          <div className="map">

            <iframe
              title="location"
              src ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.160836560947!2d78.39084637494902!3d17.452014383446258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913f3a19491f%3A0xbc2b8e1b91eea878!2sTechNex%20Cloud%20Networks%20pvt%20ltd%20(TCN)!5e0!3m2!1sen!2sin!4v1784895434062!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

          <div className="contact-info">

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h4>Address</h4>

                <p>
                  Offer Era
                  madhapur,
                  <br />
                  Hyderabad - 502291
                </p>

              </div>
            </div>

            <div className="info-card">
              <FaPhoneAlt />
              <div>
                <h4>Phone</h4>

                <p>
                  +91 9876543210
                  <br />
                  +91 9876543211
                </p>

              </div>
            </div>

            <div className="info-card">
              <FaEnvelope />
              <div>
                <h4>Email</h4>

                <p>info@Offerera.com</p>

              </div>
            </div>

            <div className="info-card">
              <FaClock />
              <div>
                <h4>Working Hours</h4>

                <p>
                  Mon - Sat
                  <br />
                  9:00 AM - 6:00 PM
                </p>

              </div>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="contact-right">

          <h2>
            Send Us a <span>Message</span>
          </h2>

          <form>

            <div className="input-row">

              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

            </div>

            <div className="input-row">

              <div className="input-group">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="Phone number"
                />
              </div>

              <div className="input-group">
                <label>Course</label>

                <select>
                  <option>Select Course</option>
                  <option>Full Stack</option>
                  <option>Mern Stack</option>
                  <option>Java FUll-stack</option>
                  <option>Data analytics</option>
                  <option>Python full stack </option>
                  <option>Cloud computing</option>
                  <option>Devops</option>
                </select>

              </div>

            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* ================= Why Reach Out ================= */}

<section className="contact-why-section">

  <div className="contact-why-header">
    <p className="contact-why-tag">WHY REACH OUT TO US?</p>

    <h2>
      We're Here to Help You at <span>Every Step</span>
    </h2>

    <p>
      Whether you're exploring courses, seeking admission guidance, or
      looking for placement support, our team is ready to answer your
      questions and help you make the right decision.
    </p>
  </div>

  <div className="contact-why-grid">

    <div className="contact-why-card">
      <div className="contact-why-icon">🎓</div>

      <h3>Admission Guidance</h3>

      <p>
        Get complete information about eligibility, admissions,
        scholarships, and the application process.
      </p>
    </div>

    <div className="contact-why-card">
      <div className="contact-why-icon">📚</div>

      <h3>Course Counselling</h3>

      <p>
        Not sure which course suits you? Our experts help you choose
        the right career path based on your interests.
      </p>
    </div>

    <div className="contact-why-card">
      <div className="contact-why-icon">💼</div>

      <h3>Placement Assistance</h3>

      <p>
        Learn about internships, placement training, and career
        opportunities offered by our institute.
      </p>
    </div>

    <div className="contact-why-card">
      <div className="contact-why-icon">🤝</div>

      <h3>Quick Support</h3>

      <p>
        Our support team responds promptly through phone, email, and
        WhatsApp to resolve your queries.
      </p>
    </div>

  </div>

</section>
      <section className="assistance-section">
        <div className="assistance-content">
          <div className="assistance-heading">
            <h2>Need Immediate <span>Assistance?</span></h2>
            <p>We're just a call or message away. Reach out through any of the options below.</p>
          </div>
          <div className="assistance-cards">
            <a href="tel:+919876543210" className="assist-card">
              <div className="assist-icon">
                <FaPhoneAlt />
              </div>
              <div>
                <h4>Call Us</h4>
                <p>+91 98765 43210</p>
              </div>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="assist-card"
            >
              <div className="assist-icon">
                <FaWhatsapp />
              </div>

              <div>
                <h4>WhatsApp</h4>
                <p>Chat with our team</p>
              </div>
            </a>

            <a
              href="mailto:info@offerera.com"
              className="assist-card"
            >
              <div className="assist-icon">
                <FaEnvelope />
              </div>

              <div>
                <h4>Email Us</h4>
                <p>info@offerera.com</p>
              </div>
            </a>

            <div className="assist-card social-card">

              <div>
                <h4>Follow Us</h4>

                <div className="social-icons">

                  <a href="#">
                    <FaFacebookF />
                  </a>

                  <a href="#">
                    <FaInstagram />
                  </a>

                  <a href="#">
                    <FaLinkedinIn />
                  </a>

                  <a href="#">
                    <FaYoutube />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </section>

  );
};

export default Contact;