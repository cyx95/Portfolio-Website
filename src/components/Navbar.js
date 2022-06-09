import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="homeLink" to="/">
        CHEN YING XIN
      </Link>
      <div className="navLinks">
        <Link className="projectsLink" to="/projects">
          Projects
        </Link>
        <Link className="aboutLink" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
