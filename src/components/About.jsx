import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            Get to know more about me, my skills, and my passion for technology
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Passionate Developer & Problem Solver</h3>
            <p>
              I'm a dedicated Computer Science undergraduate at KIET Group of Institutions, Ghaziabad, 
              with a strong passion for creating innovative solutions. My journey in technology has been 
              driven by curiosity and a desire to solve real-world problems through code.
            </p>
            <p>
              What sets me apart is my commitment to continuous learning and excellence. I've solved 
              550+ Data Structures and Algorithms problems, demonstrating my analytical thinking and 
              problem-solving skills. My experience spans full-stack development, where I've built 
              scalable applications using modern technologies like React.js, Node.js, and MongoDB.
            </p>
            <p>
              I'm particularly interested in AI/ML applications and have worked on projects involving 
              computer vision and machine learning. My goal is to contribute to cutting-edge projects 
              that make a positive impact on society while continuously expanding my technical expertise.
            </p>
            
            <div className="achievements">
              <h4>Key Achievements & Interests</h4>
              <div className="achievement-list">
                <div className="achievement-item">
                  <i className="fas fa-code"></i>
                  <span>Solved 550+ DSA problems on LeetCode & GFG</span>
                </div>
                <div className="achievement-item">
                  <i className="fas fa-trophy"></i>
                  <span>Max LeetCode Rating 1552,Streak: 281+ active days</span>
                </div>
                <div className="achievement-item">
                  <i className="fas fa-graduation-cap"></i>
                  <span>CGPA: 8.10 in Computer Science and Engineering           </span>
                </div>
                <div className="achievement-item">
                  <i className="fas fa-project-diagram"></i>
                  <span>Built production-ready full-stack applications</span>
                </div>
                <div className="achievement-item">
                  <i className="fas fa-certificate"></i>
                  <span>Certified in Introduction to Cybersecurity</span>
                </div>
              </div>
            </div>
            
            <div className="stats">
              <div className="stat">
                <h4>550+</h4>
                <p>DSA Problems Solved</p>
              </div>
              <div className="stat">
                <h4>1552  </h4>
                <p>Max LeetCode Rating</p>
              </div>
              <div className="stat">
                <h4>15+</h4>
                <p>Technologies Mastered</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <img src="/images/profile.jpg" alt="Ayush Gupta - About Me" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
