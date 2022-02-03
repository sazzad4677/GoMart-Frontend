import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../Products/Products';


const Search = ({ productsData }) => {
    const { keyword } = useParams()
    return (
        <>
            {
                productsData.products.length > 0 && <Products productsData={productsData} />
            }
            <span className="block px-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8 py-5 text-center text-2xl text-skin-secondary">
                {/* user visited but no search yet */}
                {!keyword && "Search for products (e.g. eggs, milk, potato)"}
                {/* No Match products */}
                {(keyword && productsData.products.length === 0) && <span>Your search <span className="text-skin-base font-bold">{keyword}</span> did not match any products</span>}
            </span>
            {
            }
        </>
    );
};

export default Search;