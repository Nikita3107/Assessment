import React from 'react';
import './App.css'; // Ensure CSS file is correctly set up
import images from './img/img2.webp'; // Import the image
import newEraImage from './img/new.jpeg'; 
import Logo from './img/logo.jpeg'; 
const App = () => {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#applicants">Applicants</a></li>
          <li><a href="#innovation">Innovation</a></li>
          <li><a href="#company">Company</a></li>
          <li><a href="#careers">Careers</a></li>
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
    <section className="hero" style={{ backgroundImage: `url(${images})` }}>
      <div className="hero-content">
        <h1>Elevate Experiences [Section-01]</h1>
        <p>Lorem Ipsum Quet</p>
      </div>
    </section>
  );
};

const NextEraSection = () => {
  return (
    <section className="next-era">
      <h2><span>Next era</span> of possibilities</h2> {/* Teal-colored text */}
      <img src={newEraImage} alt="New Era" className="new-era-image" /> {/* New image */}
      <h3>Embracing digital transformation that goes beyond products</h3>
      <p>Our pillars of Technology Development, System Integration, and Process Engineering drive Innovation, Streaming Operations, and ensures log-term success in a dynamic market</p>
     <div><button className="btn">How Do We Innovate</button> </div> {/* Button placed directly under the image */}
    </section>
  );
};
const ContactForm = () => {
  return (
    <section className="contact">
      <h2>Get in Touch</h2>
      <div className="contact-sections">
        <div className="contact-info">
          <h3>General Inquiries</h3>
          <h4>Address:</h4><p> 1234 Example St, City, Country</p>
          <h4>Phone: </h4><p>+123 456 7890</p>
          <h4>Email:</h4><p> contact@example.com</p>
        </div>
        <div className="form-container">
          <h3>Contact Form</h3>
          <form>
            <label htmlFor="full-name">Full Name</label>
            <input type="text" id="full-name" name="full-name" required />
            
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
            
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit" className='btn-submit'>Send</button>
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
        <div><h4>Applicants</h4>
        <div>Apparel</div>
        <div>Automotive</div>
        <div>Filtration</div>
        <div>Customised Solutions</div>
        </div>
        <div><h4>Company</h4>
        <div>Innovation</div>
        <div>Global Competency</div>
        <div>About Us</div>
        <div>Contact Us</div>
        </div>
        <div><h4>More</h4>
        <div>Careers</div>
        <div>Privacy Policy</div>
        <div>Terms and Conditions</div>
        </div>
        <div><h4>Follow Us</h4>
        <div>Twitter</div>
        <div>Linkedin</div>
        <div>Instagram</div>
        </div>
      </div>
    </footer>
  );
};

export default App;
