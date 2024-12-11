import React from "react";
import bookingOfferImage from "../../assets/sensodyne_dweb.png.png";

const BookingOfferCard = () => {
  return (
    <div className="rounded-xl w-[363px] h-[268px] shadow-md hidden md:block bg-white">
      <img src={bookingOfferImage} alt="" className="w-full h-full" />
    </div>
  );
};

export default BookingOfferCard;
