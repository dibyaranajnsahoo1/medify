import React from "react";
import bookingOfferImage from "../../assets/sensodyne_dweb.png.png";
import "./BookingOfferCard.css"; // Import the CSS file

const BookingOfferCard = () => {
  return (
    <div className="booking-offer-card">
      <img src={bookingOfferImage} alt="Booking Offer" />
    </div>
  );
};

export default BookingOfferCard;
