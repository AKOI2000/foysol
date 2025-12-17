import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="navbar nav-container">
      <div className="navbar_logo-box">
        <img src="/Logo.png" alt="" />
      </div>

      <nav className={`navbar_nav ${isActive ? "active" : ""}`}>
        <NavLink to="/" className="navbar_nav-links">
          Home
        </NavLink>
        <NavLink to="/about" className="navbar_nav-links">
          About
        </NavLink>
        <NavLink to="/contact" className="navbar_nav-links">
          Contact
        </NavLink>
      </nav>

      <div className="navbar_cta">
        <a href="" className="btn btn-main">
          Book a consultation
        </a>
        <div
          className={`nav-hamburger ${isActive ? "active" : ""}`}
          onClick={() => setIsActive((active) => !active)}
        >
          <span className="span-1"></span>
          <span className="span-2"></span>
          <span className="span-3"></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
