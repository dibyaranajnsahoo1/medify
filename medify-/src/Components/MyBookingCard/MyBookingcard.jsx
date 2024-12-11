import React from "react";
import hospitalIcon from "../../assets/bookingHospitalIcon.png";

const MyBookingcard = ({ hospital, booking }) => {
  return (
    <div className="shadow-md rounded-md mb-8">
      <div className="flex py-8 px-12 w-full justify-center h-[260px] gap-4  bg-white">
        <div className="bg-[#8CCFFF] w-[124px] h-[124px] rounded-[50%] flex items-center justify-center self-start">
          <img src={hospitalIcon} alt="" className="w-[90px] h-[90px]" />
        </div>

        <div className="self-start flex-grow">
          <p className="text-[#14BEF0] font-semibold text-xl mb-5">
            {hospital["Hospital Name"]}
          </p>

          <p className="font-bold text-[#414146] text-sm">
            {`${hospital.City}, ${hospital.State}`}
          </p>
          <p>{hospital["Hospital Type"]}</p>
        </div>

        <div className="self-start flex gap-4">
          <button className="text-[#2AA7FF] text-sm bg-white rounded-sm  text-[#2AA7FF] py-1 px-4 w-fit border-2 border-[#2AA7FF]">
            {booking.date}
          </button>
          <button className="text-[#007100] text-sm bg-white rounded-sm text-[#007100] py-1 px-4 w-fit border-2 border-[#007100]">
            {booking.slot}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyBookingcard;
