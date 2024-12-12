import React from "react";
import hospitalIcon from "../../assets/div.u-pos-has.png";
import Like from "../../assets/span.o-label--success.png";

const MyBookingcard = ({ hospital, booking }) => {
  return (
    <div style={{marginBottom: "32px" }}>
      <div
        style={{
          display: "flex",
          padding: "32px 48px",
          width: "786PX",
          justifyContent: "center",
          height: "268.38px",
          gap: "20px",
          backgroundColor: "#FFFFFF",
          borderRadius:'15px',
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        }}
      >
        <div
          style={{
          
            width: "120px",
            height: "1440x",
       
          }}
        >
          <img
            src={hospitalIcon}
            alt=""
            style={{ width: "140px", height: "142px" }}
          />
        </div>

        <div style={{ alignSelf: "flex-start", flexGrow: 1 }}>
          <p
            style={{
              color: "#14BEF0",
              fontWeight: "600",
              fontSize: "20px",
              marginBottom: "20px",
            }}
          >
            {hospital["Hospital Name"]}
          </p>

          <p
            style={{
              fontWeight: "700",
              color: "#414146",
              fontSize: "14px",
            }}
          >
            {`${hospital.City}, ${hospital.State}`}
          </p>
          <p>{hospital["Hospital Type"]}</p>
          <img src={Like} alt="like" />
        </div>

        <div style={{ alignSelf: "flex-start", display: "flex", gap: "5px", width:'230px' }}>
          <button
            style={{
              display: 'flex',
              fontFamily:'Lato',
              color: "#2AA7FF",
              fontSize: "14px",
              backgroundColor: "white",
              borderRadius: "3px",
              padding: "4px 16px",
              border: "1px solid #2AA7FF",
              width: "110px",
              height:'29.59px',
              alignItem:'center',
              textAlign:'center',
              justifyContent:'center'
              
            }}
          >
            {booking.date}
          </button>
          <button
            style={{
              color: "#007100",
              fontSize: "17px",
              fontWeight:'700',
              display: 'flex',
              fontFamily:'Lato',
              backgroundColor: "white",
              borderRadius: "3px",
              padding: "4px 16px",
              border: "1px solid #00A500",
              width: "120px",
              height:'29.59px',
              alignItem:'center',
              textAlign:'center',
              justifyContent:'center'
            }}
          >
            {booking.slot}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyBookingcard;
