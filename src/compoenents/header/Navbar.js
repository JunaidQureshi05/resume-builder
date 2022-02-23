import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <navbar>
      <div className="logo">
        <span className="primary">Resume </span>
        Maker
      </div>
      <ul className="nav-links">
        <li className="nav-link-item">Home</li>
        <li className="nav-link-item">Templates</li>
        <li className="nav-link-item s-btn">Login</li>
      </ul>
    </navbar>
  );
};

export default Navbar;
