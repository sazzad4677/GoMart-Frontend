import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../Products/Products';
import CategorySection from '../Products/CategorySection';

const Search = ({ ...props }) => {
    const {
        productsData,
        price,
        setPrice,
        resultPerPage,
        setResultPerPage,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        sortType,
        setSortType, Range } = props

    const { keyword } = useParams()
    return (
        <>
            {
                productsData.products.length > 0 &&
                <div className="px-6  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-0 py-5 font-body">
                    <div className="flex gap-3" >
                    <CategorySection  setMinPrice={setMinPrice} minPrice={minPrice} setMaxPrice={setMaxPrice} maxPrice={maxPrice} Range={Range} price={price} setPrice={setPrice} />
                        <Products
                            productsData={productsData}
                            resultPerPage={resultPerPage}
                            setResultPerPage={setResultPerPage}
                            price={price}
                            setPrice={setPrice}
                            minPrice={minPrice}
                            setMinPrice={setMinPrice}
                            maxPrice={maxPrice}
                            setMaxPrice={setMaxPrice}
                            sortType={sortType}
                            setSortType={setSortType}
                            Range={Range}
                        />
                    </div>
                </div>
            }
            <span className="block px-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8 py-5 text-center text-2xl text-skin-secondary">
                {/* user visited but no search yet */}
                {!keyword && "Search for products (e.g. eggs, milk, potato)"}
                {/* No Match products */}
                {(keyword && productsData.products.length === 0) && <span>Your search <span className="text-skin-base font-bold">{keyword}</span> did not match any products</span>}
            </span>
        </>
    );
};

export default Search;