import React from "react";
import "./Navbar.css";
// If you want icons, uncomment after installing react-icons
// import { FaChevronDown } from "react-icons/fa";
// import { IoCallOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LEFT SIDE: Logo + Name */}
        <div className="nav-left">
          <img
            src="/images/L1.png"
            alt="Logo"
            className="nav-logo"
          />

          
        </div>

        {/* NAV LINKS */}
        <ul className="nav-links">
          <li className="nav-item">Payments <span className="down-arrow">⌄</span></li>
          <li className="nav-item">Banking+ <span className="down-arrow">⌄</span></li>
          <li className="nav-item">Payroll</li>
          <li className="nav-item">Engage</li>
          <li className="nav-item">Partners <span className="down-arrow">⌄</span></li>
          <li className="nav-item">Resources</li>
          <li className="nav-item">Pricing</li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="nav-right">

          <div className="support-icon">
            <span>☎</span>
          </div>

          <img src="/images/flag.svg" alt="IND" className="flag-img" />

          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up →</button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
