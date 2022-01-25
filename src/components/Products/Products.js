import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../../actions/productActions"
const Products = () => {
    const dispatch = useDispatch();
    const { loading, products, error, productsCount } = useSelector(state => state.products)
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])
    return (
        <div>
            {
                products && products.map(product => <div>
                    <h3>{product.name} </h3>
                    <img src={product.images[0].url} alt={product.name} />
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <p>{product.rating}</p>
                </div>)
            }
        </div>
    );
};

export default Products;