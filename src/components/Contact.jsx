import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p>
              I'm currently available for full-time opportunities, freelance projects, 
              or interesting collaborations. Feel free to reach out!
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="method-info">
                  <h4>Email</h4>
                  <p>itsayush045@gmail.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="method-info">
                  <h4>Phone</h4>
                  <p>+91-9335896259</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="method-info">
                  <h4>Location</h4>
                  <p>Ghaziabad, Uttar Pradesh</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/DevAyush27" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/ayushgupta279" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://codilo.com/ayush-profile" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-code"></i>
              </a>
              <a href="https://leetcode.com/u/itsayush045/" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-laptop-code"></i>
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="footer">
          <div className="footer-content">
            <p>&copy; 2024 AYUSH GUPTA. DESIGNED AND DEVELOPED BY AYUSH GUPTA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
