import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productsReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import { authReducers, userPasswordReducer, userReducer } from "./reducers/authReducers";
const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  authReducers: authReducers,
  userReducer: userReducer,
  userPasswordReducer:userPasswordReducer
});

let initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
