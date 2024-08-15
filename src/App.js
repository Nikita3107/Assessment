import React, { useState, useEffect } from "react";
import "./App.css";
import images from "./img/img2.webp";
import newEraImage from "./img/new.jpeg";
import Logo from "./img/logo.jpeg";

const App = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["applicants", "innovation", "company", "careers"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (section) => activeSection === section;

  return (
    <div className="app">
      <Header isActive={isActive} />
      <MainContent />
      <Footer />
    </div>
  );
};

const Header = ({ isActive }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a
              href="#applicants"
              className={isActive("applicants") ? "active" : ""}
            >
              Applicants
            </a>
          </li>
          <li>
            <a
              href="#innovation"
              className={isActive("innovation") ? "active" : ""}
            >
              Innovation
            </a>
          </li>
          <li>
            <a href="#company" className={isActive("company") ? "active" : ""}>
              Company
            </a>
          </li>
          <li>
            <a href="#careers" className={isActive("careers") ? "active" : ""}>
              Careers
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const MainContent = () => {
  return (
    <main>
      <HeroSection />
      <NextEraSection />
      <ContactForm />
    </main>
  );
};

const HeroSection = () => {
  return (
    <section
      className="hero"
      id="applicants"
      style={{ backgroundImage: `url(${images})` }}
    >
      <div className="hero-content">
        <h1>Elevate Experiences [Section-01]</h1>
        <p>Lorem Ipsum Quet</p>
      </div>
    </section>
  );
};

const NextEraSection = () => {
  return (
    <section className="next-era" id="innovation">
      <h2>
        <span>Next era</span> of possibilities
      </h2>
      <img src={newEraImage} alt="New Era" className="new-era-image" />
      <h3>Embracing digital transformation that goes beyond products</h3>
      <p>
        Our pillars of Technology Development, System Integration, and Process
        Engineering drive Innovation, Streaming Operations, and ensures
        long-term success in a dynamic market
      </p>
      <div>
        <button className="btn">How Do We Innovate</button>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section className="contact" id="company">
      <h2>Get in Touch</h2>
      <div className="contact-sections">
        <div className="contact-info">
          <h3>General Inquiries</h3>
          <h4>Address:</h4>
          <p> 1234 Example St, City, Country</p>
          <h4>Phone: </h4>
          <p>+123 456 7890</p>
          <h4>Email:</h4>
          <p> contact@example.com</p>
        </div>
        <div className="form-container">
          <h3>Contact Form</h3>
          <form>
            <div>
              <label htmlFor="full-name">Full Name</label>
              <input type="text" id="full-name" name="full-name" required />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div>
              {" "}
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <div>
              <button type="submit" className="btn-submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" className="new-era-logo" />
      <div className="footer-links">
        <div>
          <h4>Applicants</h4>
          <div>Apparel</div>
          <div>Automotive</div>
          <div>Filtration</div>
          <div>Customised Solutions</div>
        </div>
        <div>
          <h4>Company</h4>
          <div>Innovation</div>
          <div>Global Competency</div>
          <div>About Us</div>
          <div>Contact Us</div>
        </div>
        <div>
          <h4>More</h4>
          <div>Careers</div>
          <div>Privacy Policy</div>
          <div>Terms and Conditions</div>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div>Twitter</div>
          <div>LinkedIn</div>
          <div>Instagram</div>
        </div>
      </div>
    </footer>
  );
};

export default App;
