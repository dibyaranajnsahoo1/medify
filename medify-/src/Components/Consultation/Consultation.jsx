import React from "react";
import "./Consultation.css";
import bluetick from "../../assets/bluetick.png";
import consultImg from "../../assets/consult-img.png";

const Consultation = () => {
  return (
    <div className="consultation">
      <div className="consultation-container">
        <div className="consultation-images">
          <img src={consultImg} alt="" />
        </div>
        <div className="consultation-content">
          <h3 className="consultation-heading">
            HELPING PATIENTS FROM AROUND THE GLOBE!!
          </h3>
          <div className="consultation-subheading">
            Patient<span> &nbsp;Caring</span>
          </div>
          <p className="consultation-para">
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>
          <div className="consultation-feature">
            <img src={bluetick} alt="" />
            <p>Stay Updated About Your Health</p>
          </div>
          <div className="consultation-feature">
            <img src={bluetick} alt="" />
            <p>Check Your Results Online</p>
          </div>
          <div className="consultation-feature">
            <img src={bluetick} alt="" />
            <p>Manage Your Appointments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
