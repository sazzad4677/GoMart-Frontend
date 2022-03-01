import React from "react";
import ShippingInfo from "../components/ShippingInfo/ShippingInfo";
import Nav from "../layout/Nav/Nav";

const ShippingInfoPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div>
      <Nav />
      <div className="mx-auto px-6 py-5 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-screen-xl lg:px-0">
        <ShippingInfo onSubmit={onSubmit}/>
      </div>
    </div>
  );
};

export default ShippingInfoPage;
