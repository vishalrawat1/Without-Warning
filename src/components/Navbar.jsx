import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h5 className="navbar-brand">Without Warning</h5>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Admin</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
