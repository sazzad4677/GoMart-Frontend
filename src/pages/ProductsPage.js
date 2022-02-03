import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Products from '../components/Products/Products';
import Nav from '../layout/Nav/Nav';
import { getProducts } from "../actions/productActions";
import { useParams } from 'react-router-dom';
import SearchPage from './SearchPage';
import Page from '../layout/Pagination/Page';
import Loader from '../layout/Loader/Loader';


const ProductsPage = () => {
    const dispatch = useDispatch();
    const { keyword } = useParams()
    const navItems = [];
    const [suggestion, setSuggestion] = useState([])
    // products data
    const productsData = useSelector(state => state.products)
    // page number
    const [currentPage, setCurrentPage] = useState(1)
    const [price, setPrice] = useState([1, 1000])
    const [resultPerPage, setResultPerPage] = useState(10)
    
    let counts = keyword ? productsData.filteredProductsCount : productsData.totalProductsCount
    useEffect(() => {
        if (productsData.errors) {
            return toast.error(productsData.errors)
        }
        dispatch(getProducts(keyword, currentPage, resultPerPage, price));
    }, [dispatch, productsData.errors, currentPage, keyword, resultPerPage, price])


    return (
        <>
            {keyword ?
                <SearchPage
                    productsData={productsData}
                    resultPerPage={resultPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    keyword={keyword} />
                : <div>
                    <>
                        <Nav
                            fixed={""}
                            items={navItems}
                            suggestion={suggestion}
                            setSuggestion={setSuggestion}
                            productsData={productsData}
                            SearchBarShow={""}
                        />
                        <>
                            <Products
                                navItems={navItems}
                                productsData={productsData}
                                resultPerPage={resultPerPage}
                                setResultPerPage={setResultPerPage}
                                price={price}
                                setPrice={setPrice}
                            />
                            {(resultPerPage <= counts && productsData.products.length) && <Page
                                resultPerPage={resultPerPage}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                counts={counts}
                                totalProductsCount={productsData.totalProductsCount}
                                filteredProductsCount={productsData.filteredProductsCount}
                                keyword={keyword}
                            />
                            }
                        </>
                        {productsData.loading && <Loader />}
                    </>

                </div>
            }
        </>
    );
};

export default ProductsPage;