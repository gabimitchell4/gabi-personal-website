import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  const location = useLocation();
  const projectRoutes = [
    "/projects",
    "/nutriguide",
    "/felt",
    "/othello",
    "/dailyduel",
    "/klondike",
  ];
  const isProjects = projectRoutes.includes(location.pathname);

  return (
    <nav className="navbar">
      <div className="left-nav">
        <Link to="/" className="name">
          Gabriella Mitchell
        </Link>
      </div>
      <div className="right-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link${location.pathname === "/" ? " active" : ""}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={`nav-link${isProjects ? " active" : ""}`}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/life"
              className={`nav-link${location.pathname === "/life" ? " active" : ""}`}
            >
              Life
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/experience"
              className={`nav-link${location.pathname === "/experience" ? " active" : ""}`}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
