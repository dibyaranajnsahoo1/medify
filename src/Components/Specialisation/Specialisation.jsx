import React from "react";
import "./Specialisation.css";
import drugstoreImg from "../../assets/Drugstore.png";
import PrimaryCare from "../../assets/Stethoscope.png";
import Cardiology from "../../assets/y.png";
import Mri from "../../assets/Heart Rate Monitor.png";
import Blood from "../../assets/Blood Sample.png";
import Immune from "../../assets/Immune.png";
import Xray from "../../assets/X-Ray.png";


const Specialisation = () => {
  return (
    <div className="specialisation">
      <div className="specialisation-container mt-36 py-10">
        <h1 className="specialisation-heading">Find By Specialisation</h1>
        <div className="specialisation-cards wrapper-card">
          <div className="specialisation-card c1 ">
            <img src={drugstoreImg} alt="drugstore logo" />
            <p>Dentistry</p>
          </div>
          <div className="specialisation-card c2">
            <img src={PrimaryCare} alt="PrimaryCare logo" />
            <p>Primary Care</p>
          </div>
          <div className="specialisation-card c3">
            <img src={Cardiology} alt="Cardiology logo" />
            <p>Cardiology</p>
          </div>
          <div className="specialisation-card c4">
            <img src={Mri} alt="MRI Resonance    logo" />
            <p>MRI Resonance</p>
          </div>
          <div className="specialisation-card c5">
            <img src={Blood} alt="Blood Test logo" />
            <p>Blood Test</p>
          </div>
          <div className="specialisation-card c6">
            <img src={Immune} alt="drugstore logo" />
            <p>Piscologist</p>
          </div>
          <div className="specialisation-card c7">
            <img src={drugstoreImg} alt="Laboratory logo" />
            <p>Laboratory</p>
          </div>
          <div className="specialisation-card c8">
            <img src={Xray} alt="Xray logo" />
            <p>X-ray</p>
          </div>
        </div>
        <button className="view-all-button">View All</button>
      </div>
    </div>
  );
};

export default Specialisation;
