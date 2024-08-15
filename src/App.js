import React from 'react';
import './App.css'; // Ensure CSS file is correctly set up
import images from './img/image.avif'; // Import the image

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
      <h2>Next era of possibilities</h2>
      <div className="image-grid">
        {/* <img src={images} alt="Next Era" /> */}
        {/* Add more images and descriptions as needed */}
      </div>
      <button className='btn'>How Do We Innovate</button>
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
      <div className="footer-links">
        <div>Applicants
        <div>Apparel</div>
        <div>Automotive</div>
        <div>Filtration</div>
        <div>Customised Solutions</div>
        </div>
        <div>Company
        <div>Innovation</div>
        <div>Global Competency</div>
        <div>About Us</div>
        <div>Contact Us</div>
        </div>
        <div>More
        <div>Careers</div>
        <div>Privacy Policy</div>
        <div>Terms and Conditions</div>
        </div>
        <div>Follow Us
        <div>Twitter</div>
        <div>Linkedin</div>
        <div>Instagram</div>
        </div>
      </div>
    </footer>
  );
};

export default App;
