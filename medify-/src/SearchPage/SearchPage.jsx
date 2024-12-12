import React from "react";
import HeaderRibbon from "../Components/HeaderRibbon/HeaderRibbon";
import Navbar from "../Components/Navbar/Navbar";
import SearchBar from "../Components/SearchBar/SearchBar";
import BookingOfferCard from "../Components/BookingofferCard/BookingOfferCard";
import BookingCard from "../Components/BookingCard/BookingCard";
import grayTick from "../assets/verified.1f87346e730e 1.png";
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
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background:
          "linear-gradient(81deg, #EFF5FE 9.01%, rgba(241, 247, 255, 0.47) 89.11%)",
      }}
    >
      <HeaderRibbon />
      <Navbar type="search" />
      <div
        style={{
          backgroundColor: "#2AA7FF",
          height: "110px",
          width: "100%",
          borderRadius: "0 0 16px 16px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          margin: "0 auto",
          marginTop: "-50px",
          marginBottom: "6rem",
       
        }}
      >
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateRows: "auto 1fr",
            gap: "1rem", 
            margin: "0 auto",
            
          }}
        >
          <div
            style={{
          
              padding: "27px 24px 27px 24px",
              
           
              
            }}
          >
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
            <div
              style={{
                marginTop: "4rem",
                marginBottom: "0.5rem",
                       
                
              }}
            >
              <p
                style={{
                  marginTop: "4rem",
                marginBottom: "0.5rem",
                fontFamily: 'Poppins',
                fontSize: '24px',
                fontWeight: '500',
                lineHeight: '36px',
                marginLeft:'20px'
                
                }}
              >
                {hospitals.length} medical centers available in{" "}
                {hospitals[0].State}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  
                }}
              >
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

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1rem",
            }}
          >
            <div 
              style={{
                gridColumn: "span 3",
        
                borderRadius:'10px'
              }}
            >
              {hospitals.map((hospital) => (
                <BookingCard
                  hospital={hospital}
                  key={hospital["Provider ID"]} 
                  onBooking={onBooking}
                  type="search"
                />
              ))}
            </div>
            <div
              style={{
                gridColumn: "span 1",
                marginTop: "-10px",
              }}
            >
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
