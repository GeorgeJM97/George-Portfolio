import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">George Malayil</span>
        </h1>
        <h2 className="hero-subtitle">Software Engineer & UI/UX Developer</h2>
        <p className="hero-description">
          Software engineer with expertise in UI/UX development. Responsible for creating scalable, resilient and reusable
          code for front end applications. Electronics and Communication graduate with minor degree in Computer Science.
        </p>
        <div className="contact-info">
          <p><a href="mailto:georgejm1997@gmail.com">georgejm1997@gmail.com</a> | +91 8867685890</p>
          <p>Bangalore, India | <a href="https://linkedin.com/in/george-malayi-88233718a" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
        <div className="hero-buttons">
          <a href="#projects" className="cta-button primary">
            View My Work
          </a>
          <a href="#contact" className="cta-button secondary">
            Get in Touch
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800"
          alt="Developer workspace with laptop and code"
          className="profile-image"
        />
      </div>
    </section>
  );
};

export default Hero; 