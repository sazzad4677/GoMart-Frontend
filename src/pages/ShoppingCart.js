import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addItemToCart, removeItemFromCart } from "../actions/cartActions";
import Cart from "../components/Cart/Cart";

const ShoppingCart = ({ cartOpen, setCartOpen }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  //Function is called every time increment(+) button is clicked
  const handleClickIncrement = (id, quantity, stock) => {
    const newQuantity = quantity + 1;
    //if stock not available
    if (newQuantity > stock) return toast.warn("Stock not available");

    //Counter state is incremented
    dispatch(addItemToCart(id, newQuantity));
  };
  //Function is called every time decrement(-) button is clicked
  const handleClickDecrement = (id, quantity) => {
    const newQuantity = quantity - 1;
    //if stock not available
    if (newQuantity <= 0) return;

    //Counter state is incremented
    dispatch(addItemToCart(id, newQuantity));
  };

  const removeCartItemHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };
  return (
    <Cart
      cartOpen={cartOpen}
      setCartOpen={setCartOpen}
      cartItems={cartItems}
      handleClickIncrement={handleClickIncrement}
      handleClickDecrement={handleClickDecrement}
      removeCartItemHandler={removeCartItemHandler}
    />
  );
};

export default ShoppingCart;
