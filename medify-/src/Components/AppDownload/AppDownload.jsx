import React from "react";
import "./AppDownload.css";
import appDownloadImage from "../../assets/appDownload_img.png";
import downArrow from "../../assets/downArrow.png";
import apple from "../../assets/apple_store.png.png";
import google from "../../assets/google_play.png.png";
const AppDownload = () => {
  return (
    <div className="appDownload-container">
      <img
        src={appDownloadImage}
        alt="stock-image"
        style={{ marginTop: "50px" }}
      />
      <img src={downArrow} alt="stock-image" className="downArrow" />
      <div className="download-section">
        <div>
          <h2 className="Download-heading">
            Download the 
            <span style={{ color: "#2AA7FF" }}> Medify</span> App
          </h2>
        </div>
        <div>
          <p
            style={{ color: "#414146", fontWeight: "700", marginLeft: "10px" }}
          >
            Get the link to download the app
          </p>
          <div className="input-section">
            <div className="input">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "16.8px",
                  padding: "12px",
                  borderRight: "0.5px solid #b4b4b4",
                }}
              >
                +91
              </div>
              <input type="number" placeholder="Enter Phone Number" />
            </div>
            <button className="send-button">Send SMS</button>
          </div>
        </div>
        <div className="appstore-links">
          <img src={google} alt="google playstore link" />
          <img src={apple} alt="apple appstore link" />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
