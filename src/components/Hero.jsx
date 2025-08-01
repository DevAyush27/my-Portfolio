import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <div className="greeting">
              <span className="wave">👋</span>
              <h1 className="hero-title">
                Hi, I'm <span className="name-highlight">Ayush Gupta</span>
              </h1>
            </div>
            
            <div className="hero-description">
              <p className="subtitle">
                COMPUTER SCIENCE UNDERGRADUATE WITH EXPERIENCE IN
                <br />
                FULL-STACK DEVELOPMENT, AI/ML, AND SYSTEM-LEVEL SOFTWARE
              </p>
              
              <p className="bio">
                I HAVE SOLVED 550+ DSA PROBLEMS AND BUILT SCALABLE
                <br />
                APPLICATIONS USING REACT.JS, NODE.JS, MONGODB, PYTHON,
                <br />
                AND REST APIs. FAMILIAR WITH LINUX, DEVOPS, AND CLOUD TECHNOLOGIES
              </p>
              
              <p className="collaboration">
                I'M PASSIONATE ABOUT BUILDING INNOVATIVE SOLUTIONS
                <br />
                AND SEEKING OPPORTUNITIES TO CONTRIBUTE TO CUTTING-EDGE PROJECTS
              </p>
            </div>

            <div className="social-links">
              <a href="https://github.com/DevAyush27" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/ayushgupta279" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://codilo.com/ayush-profile" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fas fa-code"></i>
              </a>
            </div>
          </div>

          <div className="hero-image fade-in-up">
            <div className="profile-container">
              <div className="profile-image">
                <img src="/images/profile.jpg" alt="Ayush Gupta" />
              </div>
              
              <div className="tech-icons">
                <div className="tech-icon java">
                  <i className="fab fa-java"></i>
                  <span>Java</span>
                </div>
                <div className="tech-icon react">
                  <i className="fab fa-react"></i>
                  <span>React</span>
                </div>
                <div className="tech-icon node">
                  <i className="fab fa-node-js"></i>
                  <span>Node.js</span>
                </div>
                <div className="tech-icon python">
                  <i className="fab fa-python"></i>
                  <span>Python</span>
                </div>
                <div className="tech-icon mongodb">
                  <i className="fas fa-database"></i>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
