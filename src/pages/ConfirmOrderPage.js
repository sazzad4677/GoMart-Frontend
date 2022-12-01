import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps/CheckoutSteps";
import Loader from "../layout/Loader/Loader";
import Metadata from "../layout/Metadata/Metadata";
import Nav from "../layout/Nav/Nav";

const ConfirmOrderPage = () => {
  const dispatch = useDispatch();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user, loading } = useSelector((state) => state.authReducers);
  const navigate = useNavigate();
  // Calculate Order Prices
  const itemsPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingPrice = itemsPrice > 200 ? 0 : 25;
  const taxPrice = Number((0.05 * itemsPrice).toFixed(2));
  const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2);

  const processToPayment = () => {
    const data = {
      itemsPrice: itemsPrice.toFixed(2),
      shippingPrice,
      taxPrice,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    navigate("/payment");
  };
  return loading ? (
    <Loader />
  ) : (
    <>
      <Fragment>
        <Metadata title="Confirm Order" />
        <Nav />
        <div className="mx-auto px-6 py-5 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-screen-xl lg:px-0">
          <div className="flex">
            <CheckoutSteps shipping confirmOrder />
          </div>
          <div className="row flex justify-between">
            <div className="col-12 col-lg-8 order-confirm mt-5">
              <h4 className="mb-3 font-bold">Shipping Info</h4>
              <p>
                <b>Name:</b> {user && user.name}
              </p>
              <p>
                <b>Phone:</b> {shippingInfo.phoneNo}
              </p>
              <p className="mb-4">
                <b>Address:</b>{" "}
                {`৳{shippingInfo.address}, ৳{shippingInfo.city}, ৳{shippingInfo.postalCode}, ৳{shippingInfo.country}`}
              </p>

              <hr />
              <h4 className="mt-4">Your Cart Items:</h4>

              {cartItems.map((item) => (
                <Fragment>
                  <hr />
                  <div className="cart-item my-1" key={item.product}>
                    <div className="row">
                      <div className="col-4 col-lg-2">
                        <img
                          src={item.image}
                          alt="Laptop"
                          height="45"
                          width="65"
                        />
                      </div>

                      <div className="col-5 col-lg-6">
                        <Link to={`/product/৳{item.product}`}>{item.name}</Link>
                      </div>

                      <div className="col-4 col-lg-4 mt-lg-0 mt-4">
                        <p>
                          {item.quantity} x ৳{item.price} ={" "}
                          <b>৳{(item.quantity * item.price).toFixed(2)}</b>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                </Fragment>
              ))}
            </div>

            <div className="col-12 col-lg-3 my-4">
              <div id="order_summary">
                <h4>Order Summary</h4>
                <hr />
                <p>
                  Subtotal:{" "}
                  <span className="order-summary-values">৳{itemsPrice}</span>
                </p>
                <p>
                  Shipping:{" "}
                  <span className="order-summary-values">৳{shippingPrice}</span>
                </p>
                <p>
                  Tax: <span className="order-summary-values">৳{taxPrice}</span>
                </p>

                <hr />

                <p>
                  Total:{" "}
                  <span className="order-summary-values">৳{totalPrice}</span>
                </p>

                <hr />
                <button
                  id="checkout_btn"
                  className="btn-block btn-primary btn"
                  onClick={processToPayment}
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </>
  );
};

export default ConfirmOrderPage;
