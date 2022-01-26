import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails, clearErrors } from "../../actions/productActions";
import { toast } from 'react-toastify';
const ProductDetails = () => {
    const params = useParams()
    const dispatch = useDispatch();
    const { loading, product, error } = useSelector(state => state.productDetails)
    useEffect(() => {
        if (error) {
            return toast.error(error)
        }
        dispatch(getProductDetails(params.id));
    }, [dispatch, error, params.id])
    return (
        <div>
            {
                loading ? <h1>Loading ......</h1> :
                    <h3>{product.name}</h3>
            }
        </div>
    );
};

export default ProductDetails;