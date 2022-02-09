import React, { useState } from 'react';
import { ShoppingCartIcon, HeartIcon, StarIcon } from "@heroicons/react/solid";
import { Link } from 'react-router-dom';

const Products = ({ ...props }) => {
    const { productsData: { products }} = props
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
            <div className="grid gap-6 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {(products) && products.map(product => <Link to={`/product/${product._id}`} className="block bg-white rounded-lg overflow-hidden mb-4 group shadow-4xl hover:shadow-lg border border-t-0 " key={product._id}>
                    <div className="relative pb-48 overflow-hidden">
                        {/* Product Image */}
                        <img
                            className="absolute inset-0 h-full w-full object-cover transform translate group-hover:scale-110 duration-1000"
                            src="https://media.istockphoto.com/photos/tomatoes-picture-id98026003?b=1&k=20&m=98026003&s=170667a&w=0&h=185rOlPM5RueuxjOUFCinuQICXAnUM9AIq_tDELKO4Q="
                            alt=""
                        />
                        {/* Buy Now button */}
                        <Link to="#"
                            className={`absolute bg-skin-inverted bg-opacity-0 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-50 ${!products.stock && "bg-opacity-50 opacity-100"} h-full w-full transform-opacity duration-500 cursor-pointer`}
                            onClick={BuyNow}
                        >
                            <div className="absolute flex gap-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                                <button className="font-body text-white font-extrabold text-2xl" disabled={!products.stock ? true : false}>
                                    {!products.stock ? "Out of Stock" : "Buy Now"}
                                </button>
                            </div>
                        </Link>
                    </div>
                    <div className="p-4 ">
                        {/* product tag */}
                        <div className="flex justify-between ">
                            <span className="badge border-transparent bg-skin-primary text-skin-label-text-2">
                                On Sale
                            </span>
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
                        <div className="flex font-display text-skin-primary items-center justify-between">
                            {/* product name */}
                            <h1 className="mt-2 mb-2  font-bold text-lg">
                                {product.name} -<span className="font-normal text-lg"> 3 KG</span>
                            </h1>
                            <div className="flex items-center">
                                <p className="text-skin-secondary">{product.reviews.length ? product.ratings : 0}</p>
                                <StarIcon className="text-skin-base h-4 w-4" />
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
                            {/* Product price */}
                            <div className="flex items-center mt-3">
                                <span className="text-sm font-semibold">Price:&nbsp;৳</span>&nbsp;
                                <span className="font-bold text-xl">{product.price}</span>&nbsp;
                            </div>
                            <div className="flex items-center mt-3">
                                <strike className="font-normal text-sm ">৳ 520</strike>
                                <span className="font-bold text-sm ml-3 text-skin-base">75%</span>
                            </div>
                        </div>
                    </div>
                </Link>)}
            </div>
        </>
    );
};

export default Products;