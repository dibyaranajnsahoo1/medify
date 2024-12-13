import React from "react";
import HeaderRibbon from "../HeaderRibbon/HeaderRibbon";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import BookingOfferCard from "../BookingofferCard/BookingOfferCard";
import BookingCard from "../BookingCard/BookingCard";
import grayTick from "../../assets/verified.1f87346e730e 1.png";
import Faq from "../Faq/Faq";
import AppDownload from "../AppDownload/AppDownload";
import Footer from "../Footer/Footer"
import "./SearchPage.css";

const SearchPage = ({
  hospitals,
  states,
  fetchCities,
  currentState,
  setCurrentState,
  cities,
  setCurrentCity,
  currentCity,
  fetchHospitals,
  onBooking,
}) => {
  const handleHospitalSearch = async () => {
    if (!currentState || !currentCity) {
      alert("Please select both a state and a city.");
      return;
    }
    try {
      console.log("searching");
      await fetchHospitals(currentState, currentCity);
    } catch (error) {
      console.error("Error fetching hospitals:", error);
      alert("An error occurred while fetching hospitals.");
    }
  };

  return (
    <div className="search-page">
      <HeaderRibbon />
      <Navbar type="search" />
      <div className="blue-banner"></div>
      <div className="search-container">
        <div className="search-content">
          <div className="search-bar-container">
            <SearchBar
              states={states}
              fetchCities={fetchCities}
              currentState={currentState}
              setCurrentState={setCurrentState}
              cities={cities}
              setCurrentCity={setCurrentCity}
              currentCity={currentCity}
              handleHospitalSearch={handleHospitalSearch}
              type="search"
            />
          </div>
          {Array.isArray(hospitals) && hospitals.length > 0 ? (
            <div className="hospital-info">
              <p className="hospital-count">
                {hospitals.length} medical centers available in{" "}
                {hospitals[0].State}
              </p>
              <div className="verified-info">
                <img src={grayTick} alt="Gray tick icon" />
                <p>
                  Book appointments with minimum wait-time & verified doctor
                  details
                </p>
              </div>
            </div>
          ) : (
            "No hospitals found"
          )}

          <div className="hospital-grid">
            <div className="hospital-cards">
              {hospitals.map((hospital) => (
                <BookingCard
                  hospital={hospital}
                  key={hospital["Provider ID"]}
                  onBooking={onBooking}
                  type="search"
                />
              ))}
            </div>
            <div className="booking-offer">
              <BookingOfferCard />
            </div>
          </div>
        </div>
      </div>
      <Faq />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default SearchPage;
