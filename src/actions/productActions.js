import axios from "axios";
import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from "../constants/productConstants"

export const getProducts = (keyword = '', currentPage = 1, resultPerPage = 5, price, sortType="0", stock, ratings=0) => async (dispatch) => {
    try {
        dispatch({
            type: ALL_PRODUCTS_REQUEST
        })
        let link = `/api/v1/products?name=${keyword}&page=${currentPage}&sorting=${sortType}&size=${resultPerPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${ratings}`
        // if (stock.length > 0) {
        //     link = `/api/v1/products?name=${keyword}&page=${currentPage}&sorting=${sortType}&size=${resultPerPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&stock[lte]=${stock[1]}&stock[gte]=${stock[0]}&ratings[gte]=${ratings}`
        // }
        const { data } = await axios.get(link)
        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST
        })
        const { data } = await axios.get(`/api/v1/product/${id}`)
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.products
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message,
        })
    }
}

// Clear errors
export const clearErrors = () => (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}