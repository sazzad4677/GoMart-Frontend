import React, { useEffect } from 'react';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../../actions/productActions";
import { toast } from 'react-toastify';
const Products = () => {
    const dispatch = useDispatch();
    const { loading, products, errors, productsCount } = useSelector(state => state.products)
    useEffect(() => {
        if (errors) {
            return toast.error(errors)
        }
        dispatch(getProducts());
    }, [dispatch, errors])
    return (
        <div>
            {
                loading ? <h1>Loading ......</h1> :
                    products && products.map(product => <Link to={`/product/${product._id}`}>
                        <h3>{product.name} </h3>
                        <img src={product.images[0].url} alt={product.name} />
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <p>{product.rating}</p>
                    </Link>)
            }
        </div>
    );
};

export default Products;