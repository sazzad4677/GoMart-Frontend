import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import DashboardPage from "./pages/DashboardPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/Products/ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductsPage from "./pages/ProductsPage";
import SearchPage from "./pages/SearchPage";
import { loadUser } from "./actions/authActions";
import store from "./store";
import ProfilePage from "./pages/ProfilePage";
import PrivateOutlet from "./components/Route/PrivateOutlet";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="profile" element={<ProfilePage />}></Route>
          <Route path="dashboard" element={<DashboardPage />}></Route>
        </Route>
        <Route path="/search/" element={<SearchPage />}></Route>
        <Route path="/search/:keyword" element={<SearchPage />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
      </Routes>
      <>
        <ToastContainer />
      </>
    </BrowserRouter>
  );
}

export default App;
