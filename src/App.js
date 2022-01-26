import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import DashboardPage from "./pages/DashboardPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/ProductDetails";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
      </Routes>
      <><ToastContainer /></>
    </BrowserRouter>
  );
}

export default App;
