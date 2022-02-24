import { ADD_TO_CART, REMOVE_ITEM_CART } from "../constants/cartConstants";
import axios from "axios";

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/product/${id}`);
  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.products._id,
      name: data.products.name,
      price: data.products.price,
      image: data.products.images[0].url,
      stock: data.products.stock,
      quantity: quantity,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeItemFromCart = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/product/${id}`);
  dispatch({
    type: REMOVE_ITEM_CART,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
