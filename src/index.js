import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";
import "rc-slider/assets/index.css";
import 'react-phone-number-input/style.css'
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
