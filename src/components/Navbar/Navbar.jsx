import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg p-md-3">
      <div className="container">
        <a className="navbar-brand" onClick={() => scrollToSection('home')}>Sreenandhan.dev</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mx-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection('about')}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection('projects')}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
