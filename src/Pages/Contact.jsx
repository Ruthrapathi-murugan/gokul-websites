import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
    <div className="contact-container">
      {/* Map Section */}
      <div className="map-section">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086896230505!2d-122.41941648468122!3d37.774929279758774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0a5b555%3A0xabcde1234567890!2sYour%20Business%20Location!5e0!3m2!1sen!2sus!4v1672981201203!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="form-section">
     
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name*</label>
            <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone*</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      
    </div>
    <footer className="footer-section">
    <div className="footer-info">
          <p> ADDRESS </p>
          <p>1234 Street Name, City, State, ZIP</p>
          </div>
          <div className="footer-info">
          <p>CONTACT</p>
           <p>(123) 456-7890 </p>
            <p>email@example.com</p>
        </div>
       <div className="footer-menu">
        <p>MENU</p>
      
          <a href="home">Home</a>
          <a href="studio">Studio</a>
          <a href="projects">Projects</a>
          <a href="contact">Contact</a>
        </div>
        
      </footer>
    </>
  );
};

export default Contact;
