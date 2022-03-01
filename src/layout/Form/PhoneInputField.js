import React from "react";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
const PhoneInputField = ({ control, errors }) => {
  return (
    <PhoneInputWithCountry
      name="phone"
      control={control}
      defaultCountry={"BD"}
      countries={["BD"]}
      country="BD"
      id="phone"
      international={true}
      limitMaxLength={11}
      placeholder="Enter phone number"
      addInternationalOption={false}
      countryCallingCodeEditable={false}
      withCountryCallingCode
      className={`block w-full appearance-none rounded-2xl border-b bg-transparent px-4 py-0 text-base focus:ring-0 
                      ${
                        errors
                          ? "border-red focus:border-red"
                          : "border-skin-base"
                      }`}
    />
  );
};

export default PhoneInputField;
