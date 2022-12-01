import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import DashboardPage from "./pages/DashboardPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProductsPage from "./pages/ProductsPage";
import SearchPage from "./pages/SearchPage";
import { loadUser } from "./actions/authActions";
import store from "./store";
import ProfilePage from "./pages/ProfilePage";
import PrivateOutlet from "./components/PrivateOutlet/PrivateOutlet";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";
import "rc-slider/assets/index.css";
import "react-phone-number-input/style.css";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import UpdatePasswordPage from "./pages/UpdatePasswordPage";
import ShippingInfoPage from "./pages/ShippingInfoPage";
import ConfirmOrderPage from "./pages/ConfirmOrderPage";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./pages/PaymentPage";

function App() {
  const [stripe, setStripe] = useState("");
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  const stripeKey = async () => {
    const { data } = await axios.get("/api/v1/stripeapi");
    setStripe(data.stripeApiKey);
  };
  useEffect(() => {
    stripeKey();
  }, []);
  return (
    // TODO => Route Optimization
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/forgot-password" element={<ForgotPasswordPage />}></Route>
        <Route
          path="/reset-password/:token"
          element={<ResetPasswordPage />}
        ></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/products/:id" element={<ProductDetailsPage />}></Route>
        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="profile" element={<ProfilePage />}></Route>
          <Route path="update-profile" element={<UpdateProfilePage />}></Route>
          <Route
            path="update-password"
            element={<UpdatePasswordPage />}
          ></Route>
          <Route path="dashboard" element={<DashboardPage />}></Route>
          <Route path="shipping" element={<ShippingInfoPage />}></Route>
          <Route path="confirm-order" element={<ConfirmOrderPage />}></Route>
          {stripe && (
            <Route
              path="payment"
              element={
                <Elements
                  stripe={loadStripe(stripe)}
                  options={{
                    appearance: { theme: "stripe" },
                  }}
                >
                  <Payment />
                </Elements>
              }
            ></Route>
          )}
        </Route>
        <Route path="/search/" element={<SearchPage />}></Route>
        <Route path="/search/:keyword" element={<SearchPage />}></Route>
      </Routes>
      <>
        <ToastContainer />
      </>
    </BrowserRouter>
  );
}

export default App;
