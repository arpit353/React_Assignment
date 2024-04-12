import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">PROJECTS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="//codeply.com">EXPERTISE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">ABOUT US</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">PEOPLE</a>
          </li>
        </ul>
      </div>
      <div className="mx-auto order-0">
        <a className="navbar-brand mx-auto" href="#">Brand Logo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">CAREERS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">AU</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
