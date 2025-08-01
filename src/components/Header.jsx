import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <span className="logo-text">A</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home" className="nav-link">HOME</a></li>
              <li><a href="#about" className="nav-link">ABOUT</a></li>
              <li><a href="#work" className="nav-link">WORK</a></li>
              <li><a href="#skills" className="nav-link">SKILLS</a></li>
              <li><a href="#contact" className="nav-link">CONTACT</a></li>
            </ul>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
