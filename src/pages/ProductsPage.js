import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Products from '../components/Products/Products';
import Nav from '../layout/Nav/Nav';
import { getProducts } from "../actions/productActions";
import { useParams } from 'react-router-dom';


const ProductsPage = () => {
    const dispatch = useDispatch();
    const { keyword } = useParams()
    // navigation items
    const navItems = [];
    // products data
    const data = useSelector(state => state.products)
    // page number
    const [currentPage, setCurrentPage] = useState(1)
    const [price, setPrice] = useState([1, 1000])
    const resultPerPage = 10
    const [suggestion, setSuggestion] = useState([])
    useEffect(() => {
        if (data.errors) {
            return toast.error(data.errors)
        }
        dispatch(getProducts(keyword, currentPage, resultPerPage, price));
    }, [dispatch, data.errors, currentPage, keyword, resultPerPage, price])
    return (
        <div>
            <Nav
                fixed={""}
                items={navItems}
                icons={"hidden"}
                suggestion={suggestion}
                setSuggestion={setSuggestion}
                products={data.products}
            />
            <Products
                navItems={navItems}
                data={data}
                resultPerPage={resultPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default ProductsPage;