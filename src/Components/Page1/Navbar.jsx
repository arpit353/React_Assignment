import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link nav-tab">PROJECTS</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link nav-tab">EXPERTISE</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link nav-tab">ABOUT US</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link nav-tab">PEOPLE</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link nav-tab">CAREERS</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link nav-tab">AU</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
