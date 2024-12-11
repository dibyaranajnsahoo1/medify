import React, { useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from "../../assets/searchIcon.png";
import buttonSearchIcon from "../../assets/buttonsearchIcon.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const SearchBar = ({
  states,
  fetchCities,
  currentState,
  setCurrentState,
  cities,
  setCurrentCity,
  currentCity,
  handleHospitalSearch,
  type,
}) => {
  return (
    <div className="wrapper-searchBar shadow-xl">
      {type === "search" && (
        <>
          <div className="searchBox state w-1/4">
            <LocationOnOutlinedIcon sx={{ mr: 1 }} />
            <Autocomplete
              options={states}
              value={currentState}
              onChange={(e, newValue) => {
                setCurrentState(newValue);
                if (newValue) {
                  fetchCities(newValue);
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="state"
                  variant="standard"
                  sx={{
                    "& .MuiInput-underline:before": { borderBottom: "none" },
                    "& .MuiInput-underline:hover:before": {
                      borderBottom: "none",
                    },
                    "& .MuiInput-underline:after": { borderBottom: "none" },
                    "& .MuiAutocomplete-endAdornment": { display: "none" },
                  }}
                  disableClearable
                />
              )}
              style={{ width: "100%" }}
            />
          </div>
          <div className="searchBox city">
            <LocationOnOutlinedIcon sx={{ mr: 1 }} />
            <Autocomplete
              options={cities}
              value={currentCity}
              onChange={(e, newValue) => {
                setCurrentCity(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="City"
                  variant="standard"
                  sx={{
                    "& .MuiInput-underline:before": { borderBottom: "none" },
                    "& .MuiInput-underline:hover:before": {
                      borderBottom: "none",
                    },
                    "& .MuiInput-underline:after": { borderBottom: "none" },
                    "& .MuiAutocomplete-endAdornment": { display: "none" },
                  }}
                  disableClearable
                />
              )}
              style={{ width: "100%" }}
            />
          </div>
        </>
      )}

      {type === "booking" && (
        <div className="searchBox state flex-grow">
          <div className="flex w-full gap-4 p-4">
            <LocationOnOutlinedIcon sx={{ mr: 1 }} />
            <input type="text" className="w-full" />
          </div>
        </div>
      )}
      <button className="button-search" onClick={handleHospitalSearch}>
        <img src={buttonSearchIcon} alt="" />
        Search
      </button>
    </div>
  );
};

export default SearchBar;
