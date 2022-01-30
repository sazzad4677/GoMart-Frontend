import React, { useState } from 'react';

const Search = ({ navigate }) => {
    const [keyword, setKeyword] = useState('')
    const searchHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/products/search/${keyword}`)
        } else {
            navigate(`/`)
        }
    }
    return (
        <form class="pt-2 relative mx-auto text-gray-600" onSubmit={searchHandler}>
            <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Search" onChange={(e) => setKeyword(e.target.value)} />
            <button type="submit" class=" right-0 top-0 mt-5 mr-4">
                Search
            </button>
        </form>
    );
};

export default Search;