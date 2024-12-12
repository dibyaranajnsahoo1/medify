import React, { useEffect, useState } from "react";
import hospitalIcon from "../../assets/div.u-pos-has.png";
import { Tabs, Tab, Box } from "@mui/material";
import { addDays, format } from "date-fns";
import { useNavigate } from "react-router-dom";
import Like from "../../assets/span.o-label--success.png";
import './BookingCard.css';

const BookingCard = ({ hospital, onBooking, booking, type }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [weekDays, setWeekDays] = useState([]);
  const [availableSlots, setAvailableSlots] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    generateWeekDays();
  }, []);

  useEffect(() => {
    generateAvailableSlots(weekDays);
  }, [weekDays]);

  const generateWeekDays = () => {
    const days = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i));
    setWeekDays(days);
  };

  const handleSlotSelect = (selectedSlot, selectedDate) => {
    onBooking(hospital, selectedSlot, selectedDate);
    navigate("/bookings");
  };

  const generateAvailableSlots = () => {
    const slotsData = {};
    weekDays.forEach((day) => {
      const slots = [
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
      slotsData[format(day, "yyyy-MM-dd")] = slots;
    });
    setAvailableSlots(slotsData);
  };

  const handleTabChange = (event, newTab) => {
    setSelectedTab(newTab);
  };

  const toggleSlotExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const organizeSlotsByPeriod = (slots) => {
    const groupedSlots = {
      Morning: [],
      Afternoon: [],
      Evening: [],
    };
    slots.forEach((slot) => {
      groupedSlots[slot.period].push(slot);
    });
    return groupedSlots;
  };

  const CustomTab = ({ label, subtext, ...props }) => (
    <Tab
      {...props}
      label={
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white' }}>
          <span style={{ color: '#414146', fontWeight: 'bold' }}>{label}</span>
          <span style={{ fontSize: '0.75rem', color: '#01A400' }}>{subtext}</span>
        </div>
      }
    />
  );

  return (
    <div style={{ width: '100%', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
      <div className="booking-card-container">
        <div className="hospital-icon-container">
          <img src={hospitalIcon} alt="" className="hospital-icon" />
        </div>

        <div className="hospital-info">
          <p className="hospital-name">{hospital["Hospital Name"]}</p>
          <p className="hospital-location">{`${hospital.City}, ${hospital.State}`}</p>
          <p>{hospital["Hospital Type"]}</p>
          <p className="consultation-fee">
            <span className="free-fee">FREE</span>
            <span className="original-fee">500</span>
            Consultation fee at clinic
          </p>
          <img src={Like} alt="like" />
        </div>
        {type === "search" && (
          <div className="book-button-container">
            <p className="available-today">Available Today</p>
            <button className="book-button" onClick={toggleSlotExpansion}>
              Book FREE Center Visit
            </button>
          </div>
        )}
      </div>

      {isExpanded && (
        <div className="slots-section">
          <div className="tabs-container">
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons
              aria-label="booking dates tabs"
            >
              {weekDays.map((day, index) => (
                <CustomTab
                  key={index}
                  style={{ width: '33.33%' }}
                  label={
                    index === 0
                      ? "Today"
                      : index === 1
                      ? "Tomorrow"
                      : format(day, "EEE, d MMM")
                  }
                  subtext={`${
                    availableSlots[format(day, "yyyy-MM-dd")]?.length || 0
                  } slots Available`}
                />
              ))}
            </Tabs>
          </div>

          <div className="slots-content">
            {Object.entries(availableSlots).map(([date, daySlots], index) => (
              <div key={date} hidden={selectedTab !== index}>
                {Object.entries(organizeSlotsByPeriod(daySlots)).map(
                  ([period, slots]) => (
                    <div key={period} className="slot-period-container">
                      <div className="period-heading">
                        <h4>{period}</h4>
                      </div>
                      <div className="slots-list">
                        {slots.map((slot, slotIndex) => (
                          <button
                            key={slotIndex}
                            className="slot-button"
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
      )}
    </div>
  );
};

export default BookingCard;
