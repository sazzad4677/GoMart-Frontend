import React, { useEffect, useState } from 'react';
import { ShoppingCartIcon, HeartIcon, StarIcon } from "@heroicons/react/solid";
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { toast } from 'react-toastify';

const Products = ({ price, setPrice, productsData: { products }, setResultPerPage}) => {
    const [minPrice, setMinPrice] = useState(price[0])
    const [maxPrice, setMaxPrice] = useState(price[1])
    const [data, setData] = useState(products)
    const [sortType, setSortType] = useState("default");
    // Price Range Slider
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    // Price range sorting calculation
    const handelSubmittedPriceRange = (e) => {
        e.preventDefault();
        if ((minPrice || maxPrice) < 0) {
            return toast.error("Max or Min price can't be negative number")
        }
        if (minPrice > maxPrice) {
            return toast.error("Max price can't be less than min price")
        }
        setPrice([minPrice, maxPrice]) // slider
    }
    const handelOnChangePriceSlider = (price) => {
        setPrice(price)
        setMinPrice(price[0])
        setMaxPrice(price[1])
    }
    //sorting by price (high to low / low to high) 
    useEffect(() => {
        const sortArray = type => {
            const types = {
                default: 'default',
                HighToLow: 'HighToLow',
                LowToHigh: 'LowToHigh',
            };
            const sortProperty = types[type];
            const sorted = [...products].sort((a, b) => {
                if (sortProperty === 'HighToLow') {
                    return b.price - a.price
                }
                else if (sortProperty === 'LowToHigh') {
                    return a.price - b.price
                }
                else {
                    return products
                }
            });
            setData(sorted);
        };
        sortArray(sortType);
    }, [products, sortType]);

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
            <div className="px-6  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-0 py-5 font-body">
                <div className="flex gap-3" >
                    {/* Price Range */}
                    <div className="w-1/5">
                        <div class="card">
                            <div class="card-header">
                                <div class="font-semibold text-skin-primary p-1 font-semibold">Price Range</div>
                            </div>
                            <div className="p-3">
                                <div className="pr-2 pl-2 flex flex-col justify-center">
                                    <Range min={1} max={1000} default={[1, 1000]} tipFormatter={value => `${value}`} tipProps={{ placement: "top", visibility: true }} value={price}
                                        onChange={handelOnChangePriceSlider}
                                        trackStyle={[{ backgroundColor: '#40AA54', height: '10px' }]}
                                        handleStyle={{
                                            border: "2px solid #40AA54",
                                            boxShadow: "0 0 0 4px #fff inset, 0 0 0 9px #40AA54 inset, 0 0 0 2px #fff",
                                            height: 20,
                                            width: 20,
                                            backgroundColor: '#40AA54',
                                        }}
                                        railStyle={{ backgroundColor: '#D3D3D3', height: '10px' }}
                                    />
                                </div>
                                <div class="flex items-center justify-between pt-5 space-x-4 text-sm text-gray-700">
                                    <form className="text-center" onSubmit={handelSubmittedPriceRange}>
                                        <input type="number" name="Min"
                                            class="w-24 px-3 py-2 text-center border border-gray-200 rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none text-skin-primary text-base" onChange={(e) => setMinPrice(e.target.value)} value={minPrice} />
                                        <label for="Min" className="text-skin-secondary"> Min</label>
                                    </form>
                                    <form className="text-center " onSubmit={handelSubmittedPriceRange}>
                                        <input type="text" name="Max"
                                            class="w-24 px-3 py-2 text-center border border-gray-200 rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none text-skin-primary text-base" onChange={(e) => setMaxPrice(e.target.value)} value={maxPrice} />
                                        <label for="Max" className="text-skin-secondary"> Max</label>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div>
                            <div class="card mb-6 flex flex-row justify-between items-center border rounded-lg">
                                <div class="card-header">
                                    <p class="font-semibold text-skin-primary p-1 font-semibold">Component</p>
                                </div>
                                <div className="flex">
                                    <div className="flex px-2 items-center">
                                        <p class="font-semibold text-skin-secondary p-1 text-sm">Show:</p>
                                        <select class=" text-skin-primary p-1 focus:outline-none text-sm bg-skin-optional" onChange={(e) => setResultPerPage(e.target.value)}>
                                            <option value="10"> 10</option>
                                            <option value="20"> 20</option>
                                            <option value="30"> 30</option>
                                            <option value="40"> 40</option>
                                        </select>
                                    </div>
                                    <div className="flex px-2 items-center">
                                        <p class="font-semibold text-skin-secondary p-1 text-sm">Sort By:</p>
                                        <select class=" text-skin-primary p-1 focus:outline-none text-sm bg-skin-optional" onChange={(e) => setSortType(e.target.value)}>
                                            <option value="default"> Default</option>
                                            <option value="HighToLow"> Price ( High {'>'} Low )</option>
                                            <option value="LowToHigh"> Price ( Low {'>'} High )</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {
                                !products.length &&
                                <div>
                                    <p className="mx-auto text-center text-2xl text-skin-secondary">No Products Matched</p>
                                </div>
                            }
                        </div>
                        <div className="grid gap-6 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
                            {(data) && data.map(product => <Link to={`/product/${product._id}`} className="block bg-white rounded-lg overflow-hidden mb-4 group shadow-4xl hover:shadow-lg border border-t-0 " key={product._id}>
                                <div className="relative pb-48 overflow-hidden">
                                    {/* Product Image */}
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
                            </Link>)}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;