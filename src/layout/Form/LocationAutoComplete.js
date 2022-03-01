import React from 'react';
import ReactGoogleAutocomplete from "react-google-autocomplete";

const LocationAutoComplete = ({errors, setPlace, labelFor, label}) => {
    return (
        <>
        <ReactGoogleAutocomplete
          id="area"
          className={`block w-full appearance-none rounded-2xl border-b bg-transparent px-4 py-2 text-base focus:outline-none 
      ${
        errors
          ? "border-red focus:border-red"
          : "border-skin-base"
      }`}
          apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
          onPlaceSelected={(place) => {
            setPlace(place);
          }}
          options={{
            types: ["(regions)"],
            componentRestrictions: { country: "bd" },
          }}
          autoComplete={false}
          placeholder=" "
        />
        <label
          htmlFor={labelFor}
          className="font-body text-skin-secondary -z-1 origin-0 absolute top-3 ml-3 text-sm font-semibold tracking-wide duration-300"
        >
          {label}
        </label>
      </>
    );
};

export default LocationAutoComplete;