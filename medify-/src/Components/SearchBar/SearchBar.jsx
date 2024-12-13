import React, { useEffect } from "react";
import "./SearchBar.css";

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
    <div className="wrapper-searchBar shadow-xl" style={type==='bookings'?{ width:'780px', borderRadius:'15px', left:'521px'}:undefined}>
      {type === "search" && (
        <>
          <div className="searchBox state">
            <LocationOnOutlinedIcon sx={{ mr: 2 }} />
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
              style={{ width: '326px',
                height: '30px',
                gap: '0px',
                borderRadius: '8px 0px 0px 0px',
                border: '1px 0px 0px 0px',
                opacity: '0px'
                 }}
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
              style={{ width: '522px',
                height: '30px',
                gap: '0px',
                border: '1px 0px 0px 0px',
                opacity:' 0px'
                 }}
            />
          </div>
        </>
      )}

      {type === "bookings" && (
        <div className="searchBox state flex-grow" style={{ flexGrow: 1 , }} >
          <div style={{ display: 'flex', width: '100%', gap: '16px', padding: '16px' }}>
            <LocationOnOutlinedIcon sx={{ mr: 1 }} />
            <input type="text" className="w-full" placeholder="Search By Hospital"/>
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
