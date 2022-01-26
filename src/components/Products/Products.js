import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../../actions/productActions";
import { toast } from 'react-toastify';
import Pagination from "react-js-pagination";
const Products = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch();
    const { loading, products, errors, productsCount, resultPerPage } = useSelector(state => state.products)
    useEffect(() => {
        if (errors) {
            return toast.error(errors)
        }
        dispatch(getProducts(currentPage));
    }, [dispatch, errors, currentPage])
    // set page number function
    const setCurrentPageNo = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
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
            {
                resultPerPage <= productsCount && (
                    <div>
                        <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                            <div >
                                <div class="pagination" role="navigation" aria-label="pagination">
                                    <Pagination
                                        activePage={currentPage}
                                        itemsCountPerPage={resultPerPage}
                                        totalItemsCount={productsCount}
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
                )
            }
        </div>
    );
};

export default Products;