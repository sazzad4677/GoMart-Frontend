import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingInfo } from "../actions/cartActions";
import ShippingInfo from "../components/ShippingInfo/ShippingInfo";
import Loader from "../layout/Loader/Loader"
import Metadata from "../layout/Metadata/Metadata";
import Nav from "../layout/Nav/Nav";

const ShippingInfoPage = () => {
  const dispatch = useDispatch();
  const { shippingInfo } = useSelector((state) => state.cart);
  const { user, loading } = useSelector((state) => state.authReducers);
  const navigate = useNavigate();
  const [place, setPlace] = useState(""); //area
  const onSubmit = (data) => {
    console.log(data);
    dispatch(saveShippingInfo(data));
    navigate("/confirm");
  };
  const checkOutHandler = () => {};
  return loading ? (
    <Loader />
  ) : (
    <div>
      <Metadata title="Shipping info"/>
      <Nav />
      <div className="mx-auto px-6 py-5 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-screen-xl lg:px-0">
        <ShippingInfo
          onSubmit={onSubmit}
          shippingInfo={shippingInfo}
          user={user}
          setPlace={setPlace}
        />
      </div>
    </div>
  );
};

export default ShippingInfoPage;
