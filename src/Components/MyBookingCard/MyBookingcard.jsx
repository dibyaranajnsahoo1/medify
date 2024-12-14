import React from "react";
import hospitalIcon from "../../assets/div.u-pos-has.png";
import Like from "../../assets/span.o-label--success.png";
import "./MyBookingCard.css";  

const MyBookingcard = ({ hospital, booking }) => {
  return (
    <div className="booking-card-wrapper">
      <div className="booking-card">
        <div className="card-content">
          <div className="card-image">
            <img
              src={hospitalIcon}
              alt=""
            />
          </div>

          <div className="card-info">
            <p>{hospital["Hospital Name"]}</p>
            <p>{`${hospital.City}, ${hospital.State}`}</p>
            <p>{hospital["Hospital Type"]}</p>
            <img className = "card-info-img" src={Like} alt="like" style={{width:'60px', height:'50px'}} />
          </div>

          <div className="button-container">
            <button className="button button-date">
              {booking.date}
            </button>
            <button className="button button-slot">
              {booking.slot}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingcard;
