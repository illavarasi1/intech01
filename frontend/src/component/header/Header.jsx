import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="top-header">
      <div className="brand-section">
        <div className="brand-name">Metric Meridian</div>
        <nav className="top-nav-links">
          <a href="#">Overview</a>
          <a className="active" href="#">
            Inventory
          </a>
          <a href="#">Reports</a>
        </nav>
      </div>
      <a className="logout-link" href="#">
        Logout
      </a>
    </header>
  );
};

export default Header;
