// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className = "left-nav">
          <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">Projects</Link>
              </li>
              <li className="nav-item">
                <Link to="/designs" className="nav-link">Designs</Link>
              </li>
              <li className="nav-item">
                <Link to="/experience" className="nav-link">Experience</Link>
              </li>
              </ul>
        </div>
        <div className = "right-nav">
              <p className = "name">Gabi Mitchell</p>
        </div>
    </nav>
  );
};

export default NavBar;
