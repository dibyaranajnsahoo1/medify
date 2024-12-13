import React from "react";
import HeaderRibbon from "../HeaderRibbon/HeaderRibbon";
import Navbar from "../Navbar/Navbar";
import HeroComponent from "../HeroComponent/HeroComponent";
import SearchComponent from "../SearchComponent/SearchComponent";
import Specialisation from "../Specialisation/Specialisation";
import DoctorsCarousel from "../DoctorsCarousel/DoctorsCarousel";
import Consultation from "../Consultation/Consultation";
import LatestNewsSection from "../LatestNewsSection/LatestNewsSection";
import FamilySection from "../FamilySection/FamilySection";
import Faq from "../Faq/Faq";
import AppDownload from "../AppDownload/AppDownload";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import Slides from '../../Components/Slides/Slide'



const Homepage = ({
  states,
  fetchCities,
  currentState,
  setCurrentState,
  cities,
  setCurrentCity,
  currentCity,
  fetchHospitals,
}) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!currentState || !currentCity) {
      console.log("Please select both a state and a city.");
      return; 
    }
    console.log("searching");
    fetchHospitals(currentState, currentCity);
    navigate("/search");
  };
  return (
    <div>
      <HeaderRibbon />
      <Navbar type="home" />
      <HeroComponent />
      <SearchComponent
        states={states}
        fetchCities={fetchCities}
        currentState={currentState}
        setCurrentState={setCurrentState}
        cities={cities}
        setCurrentCity={setCurrentCity}
        currentCity={currentCity}
        handleSearch={handleSearch}
        type="home"
      />
      <Slides />
      <Specialisation />
      <DoctorsCarousel />
      <Consultation />
      <LatestNewsSection />
      <FamilySection />
      <Faq />
      <AppDownload />
      <Footer />
     
    </div>
  );
};

export default Homepage;
