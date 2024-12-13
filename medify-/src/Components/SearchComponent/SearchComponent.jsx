import React from "react";
import SearchIcon from "../../assets/searchIcon.png";
import buttonSearchIcon from "../../assets/buttonsearchIcon.png";
import HospitalIcon from "../../assets/Hospital.png";
import ambulanceIcon from "../../assets/Ambulance.png";
import doctorsIcon from "../../assets/Doctor.png";
import labIcon from "../../assets/Drugstore.png";
import medicalIcon from "../../assets/Capsule.png";
import "./SearchComponent.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const SearchBox = ({ placeholder, options, value, onChange }) => (
  <div className="searchBox">
    <img src={SearchIcon} alt="Search Icon" />
    <Autocomplete
      options={options}
      value={value}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          variant="standard"
          sx={autocompleteStyles}
          disableClearable
        />
      )}
      style={{ width: "285px" }}
    />
  </div>
);

const CategoryCard = ({ icon, label }) => (
  <div className="card">
    <img src={icon} alt={`${label} Icon`} />
    <p>{label}</p>
  </div>
);

const SearchComponent = ({
  states,
  fetchCities,
  currentState,
  setCurrentState,
  cities,
  setCurrentCity,
  currentCity,
  handleSearch,
  type,
}) => {
  return (
    <div className="wrapper-searchComponent">
      <div className="wrapper-searchBox">
        <SearchBox
          placeholder="State"
          options={states}
          value={currentState}
          onChange={(e, newValue) => {
            setCurrentState(newValue);
            if (newValue) fetchCities(newValue);
          }}
          
        />
        <SearchBox
          placeholder="City"
          options={cities}
          value={currentCity}
          onChange={(e, newValue) => setCurrentCity(newValue)}
        />
         <button className="button"   onClick={() => {if (!currentState || !currentCity) {alert("Please select both a state and a city.");
      return;
    }
    handleSearch();
  }} aria-label="Search" style={{height:'50px', display:'flex', justifyContent:'center', textAlign:'center', alignItems:'center', borderRadius:'8px'}}>
        <img src={buttonSearchIcon} alt="Search Button Icon" />
        Search
      </button>
      
      </div>

      {type === "home" && (
        <div>
          <p className="suggestion-heading">You may be looking for</p>
          <div className="wrapper-card">
            <CategoryCard icon={doctorsIcon} label="Doctors" />
            <CategoryCard icon={labIcon} label="Labs" />
            <CategoryCard icon={HospitalIcon} label="Hospitals" />
            <CategoryCard icon={medicalIcon} label="Medical Store" />
            <CategoryCard icon={ambulanceIcon} label="Ambulance" />
          </div>
        </div>
      )}
    </div>
  );
};

const autocompleteStyles = {
  "& .MuiInput-underline:before": { borderBottom: "none" },
  "& .MuiInput-underline:hover:before": { borderBottom: "none" },
  "& .MuiInput-underline:after": { borderBottom: "none" },
  "& .MuiAutocomplete-endAdornment": { display: "none" },
};

export default SearchComponent;
