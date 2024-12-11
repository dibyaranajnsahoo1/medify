import React from "react";
import HeaderRibbon from "../Components/HeaderRibbon/HeaderRibbon";
import Navbar from "../Components/Navbar/Navbar";
import SearchBar from "../Components/SearchBar/SearchBar";
import BookingOfferCard from "../Components/BookingofferCard/BookingOfferCard";
import BookingCard from "../Components/BookingCard/BookingCard";
import grayTick from "../assets/greyTick.png";
import Faq from "../Components/Faq/Faq";
import AppDownload from "../Components/AppDownload/AppDownload";
import Footer from "../Components/Footer/Footer";
import SearchComponent from "../Components/SearchComponent/SearchComponent";

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
  const handleHospitalSearch = () => {
    if (!currentState || !currentCity) {
      alert("Please select both a state and a city.");
      return; // Prevent searching if state or city is not selected
    }
    console.log("searching");
    fetchHospitals(currentState, currentCity);
  };

  return (
    <div className="relative min-h-screen bg-[linear-gradient(81deg,_#EFF5FE_9.01%,_rgba(241,247,255,0.47)_89.11%)]">
      <HeaderRibbon />
      <Navbar type="search" />
      <div className="bg-[#2AA7FF] h-[110px] w-full rounded-2xl rounded-t-none  z-0"></div>
      <div className="flex justify-center items-center w-4/5 mx-auto mt-[-50px] mb-24 ">
        <div className="w-full grid grid-rows-[auto,1fr] gap-4 mx-auto ">
          <div className="w-full">
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
          {hospitals.length > 0 ? (
            <div className="mt-16 mb-2">
              <p className="text-2xl font-medium">
                {hospitals.length} medical centers available in{" "}
                {hospitals[0].State}
              </p>
              <div className="flex items-center gap-2">
                <img src={grayTick} alt="" />
                <p>
                  Book appointments with minimum wait-time & verified doctor
                  details
                </p>
              </div>
            </div>
          ) : (
            "No hospitals found"
          )}

          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">
              {hospitals.map((hospital) => (
                <BookingCard
                  hospital={hospital}
                  key={hospital["Provider ID"]}
                  onBooking={onBooking}
                  type="search"
                />
              ))}
            </div>
            <div className="col-span-1 mt-[-10px]">
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
