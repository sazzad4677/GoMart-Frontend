import React, { useState } from 'react';
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/solid";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import Loader from "../Loader/Loader"

const Products = ({ ...props }) => {
    const navigate = useNavigate()
    const { keyword } = useParams()
    const { currentPage, setCurrentPage } = props
    const { loading, products, errors, totalProductsCount, filteredProductsCount } = props.data
    const resultPerPage = props.resultPerPage
    let counts = keyword ? filteredProductsCount : totalProductsCount
    // set page number function
    const setCurrentPageNo = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const handelShoppingCart = () => {
        console.log("Shopping Cart");
    };

    const [state, setState] = useState(false);

    const handelWishList = () => {
        setState((prev) => !prev);
    };
    const BuyNow = () => {
        console.log("buy now");
    };
    return (
        <>
            {loading ? <Loader /> : <div>
                <div className="px-6  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8 py-5">
                    <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
                        {products && products.map(product => <Link to={`/product/${product._id}`} className="block bg-white rounded-lg overflow-hidden mb-10 group shadow-4xl hover:shadow-lg border border-t-0 " key={product._id}>
                            <div className="relative pb-48 overflow-hidden">
                                <img
                                    className="absolute inset-0 h-full w-full object-cover transform translate group-hover:scale-110 duration-1000"
                                    src="https://media.istockphoto.com/photos/tomatoes-picture-id98026003?b=1&k=20&m=98026003&s=170667a&w=0&h=185rOlPM5RueuxjOUFCinuQICXAnUM9AIq_tDELKO4Q="
                                    alt=""
                                />
                                <div
                                    className="absolute bg-skin-inverted bg-opacity-0 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-50 h-full w-full transform-opacity duration-500 cursor-pointer"
                                    onClick={BuyNow}
                                >
                                    <div className="absolute flex gap-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                                        <button className="font-body text-white font-extrabold text-2xl">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 ">
                                {/* product tag */}
                                <div className="flex gap-2 ">
                                    <span className="badge border-transparent bg-skin-primary text-skin-label-text-2">
                                        On Sale
                                    </span>
                                </div>
                                <div className="flex font-display text-skin-primary items-center justify-between">
                                    {/* product name */}
                                    <h1 className="mt-2 mb-2  font-bold text-lg">
                                        {product.name} -<span className="font-normal text-lg"> 3 KG</span>
                                    </h1>
                                    <div className="flex gap-4">
                                        <ShoppingCartIcon
                                            className="text-green h-6 w-6 cursor-pointer"
                                            onClick={handelShoppingCart}
                                        />
                                        <HeartIcon
                                            className="text-red h-6 w-6 cursor-pointer"
                                            onClick={handelWishList}
                                        />
                                    </div>
                                </div>
                                {/* Product Seller */}
                                <p className="flex font-display items-center mb-2 text-xs">
                                    <span className="font-semibold">Brand:&nbsp;</span> {product.seller}
                                </p>
                                {/* Product Small Description */}
                                <article className="small-text">
                                    {product.description}
                                </article>
                                <div className="flex gap-3">
                                    <div className="flex items-center mt-3">
                                        <span className="text-sm font-semibold">Price:&nbsp;৳</span>&nbsp;
                                        <span className="font-bold text-xl">50</span>&nbsp;
                                    </div>
                                    <div className="flex items-center mt-3">
                                        <strike className="font-normal text-sm ">৳ 520</strike>
                                        <span className="font-bold text-sm ml-3 text-skin-base">75%</span>
                                    </div>
                                </div>
                            </div>
                            {/* Review */}
                            <div className="p-4 border-t flex items-center justify-between text-sm text-skin-secondary">
                                <ReactStars
                                    size={24}
                                    value={product.reviews.length ? product.ratings : 0}
                                    edit={false}
                                    activeColor={"#40AA54"}
                                />
                                <span className="ml-2"> {product.reviews.length}&nbsp;Reviews</span>
                            </div>
                        </Link>)}
                    </div>
                </div>
                {resultPerPage <= counts && (
                    <div className="bg-white px-4 py-3 flex items-center justify-center sm:px-6">
                        <div >
                            <div className="pagination" role="navigation" aria-label="pagination">
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
                )}
            </div>}
        </>
    );
};

export default Products;