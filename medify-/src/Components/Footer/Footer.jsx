import React from "react";
import "./Footer.css";
import logo from "../../assets/mainLogo.png";
import fbLogo from "../../assets/fb-logo.png";
import ytLogo from "../../assets/yt-logo.png";
import pinterestLogo from "../../assets/pinterest-logo.png";
import twitterLogo from "../../assets/twitter-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="logo-social-media">
            <div>
              <img src={logo} alt="logo" />
            </div>

            <div className="social-media-links">
              <img src={fbLogo} alt="facebook logo" />
              <img src={twitterLogo} alt="twitter logo" />
              <img src={ytLogo} alt="youtube logo" />
              <img src={pinterestLogo} alt="pinterest logo" />
            </div>
          </div>
          <div className="footer-links">
            <div>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Pricing</a>
                </li>
                <li>
                  <a href="#">Our Gallery</a>
                </li>
                <li>
                  <a href="#">Appointment</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a href="#">Orthology</a>
                </li>
                <li>
                  <a href="#">Neurology</a>
                </li>
                <li>
                  <a href="#">Dental Care</a>
                </li>
                <li>
                  <a href="#">Opthalmology</a>
                </li>
                <li>
                  <a href="#">Cardiology</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Pricing</a>
                </li>
                <li>
                  <a href="#">Our Gallery</a>
                </li>
                <li>
                  <a href="#">Appointment</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="linebreak"></div>
        
        <div className="copyright">
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </div>
        <div style={{display:'none'}}>
          Dibya ranjan sahoo
        </div>
      </div>
    </div>
  );
};

export default Footer;
