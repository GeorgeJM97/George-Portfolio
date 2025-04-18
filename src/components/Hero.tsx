import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef} aria-label="Introduction">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hello there! I'm <span className="gradient-text">George Malayil</span>
          </h1>
          <p className="hero-description">
            A passionate UI/UX Developer crafting aesthetic and intuitive digital experiences.
            I build smooth, scalable interfaces that feel good to use—on any device, and most importantly, for everyone.
          </p>
          <div className="hero-buttons" role="group" aria-label="Navigation actions">
            <button 
              className="cta-button primary" 
              onClick={scrollToProjects}
              aria-label="View my projects"
            >
              View My Work
            </button>
            <button 
              className="cta-button" 
              onClick={scrollToContact}
              aria-label="Contact me"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="floating-devices" aria-hidden="true">
          <div className="device iphone">
            <div className="screen">
              <div className="app-preview"></div>
            </div>
          </div>
          <div className="device macbook">
            <div className="screen">
              <div className="desktop-preview"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 