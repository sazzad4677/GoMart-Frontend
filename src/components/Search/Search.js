import { SearchIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
const Search = ({ navigate, SearchBarShow, suggestion, setSuggestion, products }) => {
    const [keyword, setKeyword] = useState('')
    const [text, setText] = useState('')
    // const [suggestion, setSuggestion] = useState('')
    const searchHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/productsold/search/${keyword}`)
        } else {
            navigate(`/`)
        }
    }
    const onChangeHandler = (e) => {
        setKeyword(e.target.value)
        let matched = []
        if (e.target.value.length) {
            matched = products.filter(product => {
                const regex = new RegExp(`${e.target.value}`, "gi")
                return product.name.match(regex);
            })
        }
        setText(e.target.value)
        setSuggestion(matched)
    }
    const onSuggestHandler = (text) => {
        setText(text)
        setSuggestion([])
    }
    return (
        <>
            <form className={`shadow inline-flex flex-col justify-center relative text-gray-500 rounded w-3/5 mx-auto ${SearchBarShow}`} onSubmit={searchHandler}>
                <div className="relative flex">
                    <input className="w-full text-lg rounded p-1 pl-4 focus:outline-none" type="text" placeholder="Search" onChange={onChangeHandler} value={text} autoFocus onBlur={() => {
                        setTimeout(() => {
                            setSuggestion([])
                        }, 100)
                    }} />
                    <button className=" p-1 pl-4 pr-4 text-skin-secondary">
                        <SearchIcon className="w-6 h-6" />
                    </button>
                </div>
                <ul className="absolute z-50 top-full bg-white w-full mt-2">
                    {suggestion && suggestion.map((suggestion, i) => <li key={i} onClick={() => onSuggestHandler(suggestion.name)} className="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
                        <svg className="absolute w-4 h-4 left-2 top-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                        {suggestion.name}
                    </li>)}
                </ul>
            </form>
        </>
        // <form className="pt-2 relative mx-auto text-gray-600" onSubmit={searchHandler}>
        //     <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        //         type="search" name="search" placeholder="Search" onChange={(e) => setKeyword(e.target.value)} />
        //     <button type="submit" className=" right-0 top-0 mt-5 mr-4">
        //         Search
        //     </button>
        // </form>
    );
};

export default Search;