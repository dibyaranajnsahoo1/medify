import React, { useEffect, useState } from "react";
import hospitalIcon from "../../assets/bookingHospitalIcon.png";
import { Tabs, Tab, Box } from "@mui/material";
import { addDays, format } from "date-fns";
import { useNavigate } from "react-router-dom";
const BookingCard = ({ hospital, onBooking, booking, type }) => {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState(0);
  const [weekDates, setWeekDates] = useState([]);
  const [slots, setSlots] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    generateWeekDates();
  }, []);

  useEffect(() => {
    generateSlots(weekDates);
  }, [weekDates]);
  const generateWeekDates = () => {
    const dates = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i));

    setWeekDates(dates);
  };

  const handleSlotSelect = (slot, date) => {
    onBooking(hospital, slot, date);
    navigate("/bookings");
  };

  const generateSlots = () => {
    const generatedSlots = {};
    weekDates.forEach((date) => {
      const daySlots = [
        { time: "10:30 AM", period: "Morning" },
        { time: "11:00 AM", period: "Morning" },
        { time: "11:30 AM", period: "Morning" },
        { time: "12:00 PM", period: "Afternoon" },
        { time: "12:30 PM", period: "Afternoon" },
        { time: "01:30 PM", period: "Afternoon" },
        { time: "02:00 PM", period: "Afternoon" },
        { time: "02:30 PM", period: "Afternoon" },
        { time: "06:00 PM", period: "Evening" },
        { time: "06:30 PM", period: "Evening" },
        { time: "07:00 PM", period: "Evening" },
        { time: "07:30 PM", period: "Evening" },
      ];
      generatedSlots[format(date, "yyyy-MM-dd")] = daySlots;
    });
    setSlots(generatedSlots);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const groupSlotsByPeriod = (daySlots) => {
    const groupedSlots = {
      Morning: [],
      Afternoon: [],
      Evening: [],
    };
    daySlots.forEach((slot) => {
      groupedSlots[slot.period].push(slot);
    });
    return groupedSlots;
  };

  const CustomTab = ({ label, subtext, ...props }) => (
    <Tab
      {...props}
      label={
        <div className="flex flex-col items-center bg-white">
          <span className="text-[#414146]  font-bold">{label}</span>
          <span className="text-xs text-[#01A400]">{subtext}</span>
        </div>
      }
    />
  );
  return (
    <div className="w-full shadow-md">
      <div className="flex py-8 px-12 w-full justify-center h-[260px] gap-4  bg-white">
        <div className="bg-[#8CCFFF] w-[124px] h-[124px] rounded-[50%] flex items-center justify-center self-start">
          <img src={hospitalIcon} alt="" className="w-[90px] h-[90px]" />
        </div>

        <div className="self-center flex-grow">
          <p className="text-[#14BEF0] font-semibold text-xl mb-5">
            {hospital["Hospital Name"]}
          </p>

          <p className="font-bold text-[#414146] text-sm">
            {`${hospital.City}, ${hospital.State}`}
          </p>
          <p>{hospital["Hospital Type"]}</p>
          <p className="mt-2">
            <span className="text-[#02A401] font-bold text-sm mr-2">FREE</span>
            <span className="text=[#787887] line-through mr-2">500</span>
            Consultation fee at clinic
          </p>
        </div>
        {type === "search" && (
          <div className="self-end">
            <p className="text-[#01A400] font-medium text-sm text-center">
              Available Today
            </p>
            <button
              className="flex items-center w-[212px] h-[40px]] justify-center text-sm text-white text-sm font-medium bg-[#2AA7FF] shadow-sm border-none rounded-[4px] mt-2 h-[40px]"
              onClick={toggleExpand}
            >
              Book FREE Center Visit
            </button>
          </div>
        )}
      </div>
      {expanded && (
        <div className="w-full bg-white">
          <div className="w-4/5 mx-auto">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              aria-label="booking dates tabs"
              sx={{
                background: "white",
                boxShadow: "none",
                marginBottom: "0px",
              }}
            >
              {weekDates.map((date, index) => (
                <CustomTab
                  key={index}
                  sx={{
                    width: "33.33%",
                  }}
                  label={
                    index === 0
                      ? "Today"
                      : index === 1
                      ? "Tomorrow"
                      : format(date, "EEE, d MMM")
                  }
                  subtext={`${
                    slots[format(date, "yyyy-MM-dd")]?.length || 0
                  } slots Available`}
                />
              ))}
            </Tabs>

            <div className="mt-4 bg-white">
              {Object.entries(slots).map(([date, daySlots], index) => (
                <div key={date} hidden={value !== index}>
                  {Object.entries(groupSlotsByPeriod(daySlots)).map(
                    ([period, slots]) => (
                      <div
                        key={period}
                        className=" flex items-center gap-12 px-4 py-8 bg-white w-full border-b-2 border-b-gray-200 "
                      >
                        <div className="w-1/6">
                          <h4 className="font-normal mb-2 text-[#414146]">
                            {period}
                          </h4>
                        </div>
                        <div className=" flex flex-grow gap-4 flex-wrap ">
                          {slots.map((slot, slotIndex) => (
                            <button
                              key={slotIndex}
                              className="text-[#2AA7FF] text-sm bg-white rounded-sm hover:bg-blue-50 text-[#2AA7FF] py-1 px-4 w-fit border-2 border-[#2AA7FF]"
                              onClick={() => handleSlotSelect(slot.time, date)}
                            >
                              {slot.time}
                            </button>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
