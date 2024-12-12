import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/mainLogo.png";
import { NavLink } from "react-router-dom";

const Navbar = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={type === "home" ? "linear-background" : "navbar-alternate"}>
      <div className="navbar-wrapper">
        <div>
          <NavLink to="/">
            <img
              src={logo}
              alt="logo"
              style={{ padding: "0px", width: "92px", height: "27px" }}
            />
          </NavLink>
        </div>
        <button
          className="hamburger-menu"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          {[
            { path: "/search", label: "Find Doctors" },
            { path: "/hospitals", label: "Hospitals" },
            { path: "/medicines", label: "Medicines" },
            { path: "/surgeries", label: "Surgeries" },
            { path: "/providers", label: "Software for Provider" },
            { path: "/facilities", label: "Facilities" },
          ].map((link, index) => (
            <div className="relative" key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "nav-link-active" : ""}`
                }
              >
                <p>{link.label}</p>
              </NavLink>
            </div>
          ))}
          <NavLink to="/bookings">
            <button className="booking-button" aria-label="View My Bookings">
              My Bookings
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
