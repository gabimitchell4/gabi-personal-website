import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="left-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className={`nav-link${location.pathname === '/' ? ' active' : ''}`}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className={`nav-link${location.pathname === '/projects' ? ' active' : ''}`}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/designs" className={`nav-link${location.pathname === '/designs' ? ' active' : ''}`}>Designs</Link>
          </li>
          <li className="nav-item">
            <Link to="/experience" className={`nav-link${location.pathname === '/experience' ? ' active' : ''}`}>Experience</Link>
          </li>
        </ul>
      </div>
      <div className="right-nav">
        <p className="name">Gabi Mitchell</p>
      </div>
    </nav>
  );
};

export default NavBar;
