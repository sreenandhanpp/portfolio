import React, { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsNavVisible(false); // Hide navbar after clicking
    }
  };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">

        <a className="navbar-brand" onClick={() => scrollToSection('home')}>Sreenandhan.dev</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
        >
          <GiHamburgerMenu />
        </button>
        </div>

      </nav>
      {isNavVisible && 
      <div className={`navbar-menu ${isNavVisible ? 'show' : ''}`}>
        <div className="navbar-menu-header">
          <button className="close-icon" onClick={toggleNav}>
            <MdClose />
          </button>
        </div>
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
}
    </>
  );
};

export default Navbar;
