import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingInfo } from "../actions/cartActions";
import ShippingInfo from "../components/ShippingInfo/ShippingInfo";
import Nav from "../layout/Nav/Nav";

const ShippingInfoPage = () => {
  const dispatch = useDispatch();
  const { shippingInfo } = useSelector((state) => state.cart);
  const { user, loading } = useSelector((state) => state.authReducers);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    dispatch(saveShippingInfo(data));
    navigate("/confirm");
  };
  return (
    <div>
      <Nav />
      <div className="mx-auto px-6 py-5 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-screen-xl lg:px-0">
        <ShippingInfo onSubmit={onSubmit} shippingInfo={shippingInfo} user={user}/>
      </div>
    </div>
  );
};

export default ShippingInfoPage;
