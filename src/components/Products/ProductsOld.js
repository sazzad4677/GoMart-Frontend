import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../../actions/productActions";
import { toast } from 'react-toastify';
import Pagination from "react-js-pagination";
import Search from '../Search/Searchbar';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const Products = () => {
    const navigate = useNavigate()
    const { keyword } = useParams()
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1)
    const [price, setPrice] = useState([1, 1000])
    const { loading, products, errors, totalProductsCount, filteredProductsCount } = useSelector(state => state.products)
    let counts = keyword ? filteredProductsCount : totalProductsCount
    const resultPerPage = 5
    useEffect(() => {
        if (errors) {
            return toast.error(errors)
        }
        dispatch(getProducts(keyword, currentPage, resultPerPage, price));
    }, [dispatch, errors, currentPage, keyword, resultPerPage, price])
    // set page number function
    const setCurrentPageNo = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    return (
        <div>
            <Search navigate={navigate} page={currentPage} />
            {
                loading ? <h1>Loading ......</h1> :
                    <div>
                        {
                            keyword ? <div > <div className="flex  w-64 m-auto items-center h-32 justify-center">
                                <Range marks={{ 1: `$1`, 1000: `$1000` }} min={1} max={1000} default={[1, 1000]} tipFormatter={value => `${value}`} tipProps={{ placement: "top", visibility: "true" }} value={price} onChange={price => setPrice(price)} />
                            </div> {
                                    products && products.map(product => <Link to={`/product/${product._id}`} key={product._id}>
                                        <h3>{product.name} </h3>
                                        <img src={product.images[0].url} alt={product.name} />
                                        <p>{product.price}</p>
                                        <p>{product.description}</p>
                                        <p>{product.rating}</p>
                                    </Link>)
                                } </div> : products && products.map(product => <Link to={`/product/${product._id}`}>
                                    <h3>{product.name} </h3>
                                    <img src={product.images[0].url} alt={product.name} />
                                    <p>{product.price}</p>
                                    <p>{product.description}</p>
                                    <p>{product.rating}</p>
                                </Link>)
                        }
                    </div>
            }
            {resultPerPage <= counts && (
                <div>
                    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                        <div >
                            <div className="pagination" role="navigation" aria-label="pagination">
                                <Pagination
                                    activePage={currentPage}
                                    itemsCountPerPage={resultPerPage}
                                    totalItemsCount={counts}
                                    onChange={setCurrentPageNo}
                                    nextPageText={"Next"}
                                    prevPageText={"Prev"}
                                    disabledclassName="pagination-disabled"
                                    itemclassName="pagination-link"
                                    activeclassName="pagination-link pagination-active bg-skin-primary hover:bg-skin-primary hover:bg-opacity-80"
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