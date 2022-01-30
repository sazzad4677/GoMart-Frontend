import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../../actions/productActions";
import { toast } from 'react-toastify';
import Pagination from "react-js-pagination";
import Search from '../Search/Search';
const Products = () => {
    const navigate = useNavigate()
    const { keyword } = useParams()
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch();
    const { loading, products, errors,totalProductsCount, filteredProductsCount } = useSelector(state => state.products)
    const resultPerPage = 5
    useEffect(() => {
        if (errors) {
            return toast.error(errors)
        }
        dispatch(getProducts(keyword, currentPage, resultPerPage));
    }, [dispatch, errors, currentPage, keyword, resultPerPage])
    // set page number function
    const setCurrentPageNo = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    let counts = keyword ? filteredProductsCount : totalProductsCount
    return (
        <div>
            <Search navigate={navigate} page={currentPage} />
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
            {resultPerPage <= counts && (
                <div>
                    <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                        <div >
                            <div class="pagination" role="navigation" aria-label="pagination">
                                <Pagination
                                    activePage={currentPage}
                                    itemsCountPerPage={resultPerPage}
                                    totalItemsCount={counts}
                                    onChange={setCurrentPageNo}
                                    nextPageText={"Next"}
                                    prevPageText={"Prev"}
                                    disabledClass="pagination-disabled"
                                    itemClass="pagination-link"
                                    activeClass="pagination-link pagination-active bg-skin-primary hover:bg-skin-primary hover:bg-opacity-80"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;