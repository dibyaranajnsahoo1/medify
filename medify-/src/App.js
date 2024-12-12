import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./Components/home/Homepage";
import SearchPage from "./Components/SearchPage/SearchPage";
import MyBookingsPage from "./Components/MyBookingsPage/MyBookingsPage";

function App() {
  const [states, setStates] = useState([]);
  const [currentState, setCurrentState] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [cities, setCities] = useState([]);
  const [hospitals, setHospitals] = useState([]);

  const [bookings, setBookings] = useState([]);

  const fetchStates = async () => {
    try {
      const res = await axios.get(
        "https://meddata-backend.onrender.com/states"
      );
      const data = res.data;
      setStates(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCities = async (state) => {
    try {
      const res = await axios.get(
        `https://meddata-backend.onrender.com/cities/${state}`
      );
      const data = res.data;
      setCities(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchHospitals = async (state, city) => {
    try {
      const res = await axios.get(
        `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
      );
      const data = res.data;
      setHospitals(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleBooking = (hospital, date, slot) => {
  //   setBookings((prevBookings) => [...prevBookings, { hospital, date, slot }]);
  // };

  const handleBooking = (hospital, date, slot) => {
    const newBooking = { hospital, date, slot };

    // Update state
    setBookings((prevBookings) => {
      const updatedBookings = [...prevBookings, newBooking];

      // Save to localStorage
      localStorage.setItem("bookings", JSON.stringify(updatedBookings));

      return updatedBookings;
    });
  };

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <Homepage
                  states={states}
                  fetchCities={fetchCities}
                  currentState={currentState}
                  setCurrentState={setCurrentState}
                  cities={cities}
                  setCurrentCity={setCurrentCity}
                  currentCity={currentCity}
                  fetchHospitals={fetchHospitals}
                />
              }
            />
            <Route
              path="/search"
              element={
                <SearchPage
                  hospitals={hospitals}
                  states={states}
                  fetchCities={fetchCities}
                  currentState={currentState}
                  setCurrentState={setCurrentState}
                  cities={cities}
                  setCurrentCity={setCurrentCity}
                  currentCity={currentCity}
                  fetchHospitals={fetchHospitals}
                  onBooking={handleBooking}
                />
              }
            />
            <Route
              path="/bookings"
              element={
                <MyBookingsPage bookings={bookings} onBooking={handleBooking} />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
