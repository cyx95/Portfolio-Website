import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="homeLink" to="/">
        Home
      </Link>
      <Link className="aboutLink" to="/about">
        About Me
      </Link>
      <Link className="projectsLink" to="/projects">
        Projects
      </Link>
    </nav>
  );
}

export default Navbar;
