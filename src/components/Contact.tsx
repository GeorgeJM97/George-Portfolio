import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact" aria-label="Contact Information">
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-info" role="list">
          <div className="contact-item" role="listitem">
            <i className="fas fa-envelope" aria-hidden="true"></i>
            <a href="mailto:georgejm1997@gmail.com" aria-label="Send email to George Malayil">
              georgejm1997@gmail.com
            </a>
          </div>
          <div className="contact-item" role="listitem">
            <i className="fas fa-phone" aria-hidden="true"></i>
            <a href="tel:+918867685890" aria-label="Call George Malayil">
              +91 8867685890
            </a>
          </div>
          <div className="contact-item" role="listitem">
            <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
            <span>Bangalore, India</span>
          </div>
        </div>
        <div className="social-links" role="list" aria-label="Social media links">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit George's LinkedIn profile"
          >
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit George's GitHub profile"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit George's Twitter profile"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 