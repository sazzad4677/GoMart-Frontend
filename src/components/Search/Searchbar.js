import { SearchIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Searchbar = ({...props}) => {
    const { SearchBarShow, suggestion, setSuggestion, productsData} = props
    const navigate = useNavigate()
    const [keyword, setKeyword] = useState('')
    const searchHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/search/${keyword}`)
        } else {
            navigate(`/`)
        }
    }
    // const [text, setText] = useState('')
    const onChangeHandler = (e) => {
        setKeyword(e.target.value)
        // let matched = []
        // if (e.target.value.length) {
        //     matched = productsData.products.filter(product => {
        //         const regex = new RegExp(`${e.target.value}`, "gi")
        //         return product.name.match(regex);
        //     })
        // }
        // setText(e.target.value)
        // setSuggestion(matched)
    }
    // const onSuggestHandler = (text) => {
    //     setText(text)
    //     setSuggestion([])
    // }
    return (
        <>
            <form className={`shadow rounded-2xl border inline-flex flex-col justify-center relative text-gray-500 w-3/5 mx-auto ${SearchBarShow}`} onSubmit={searchHandler}>
                {/* Searchbar */}
                <div className="relative flex">
                    <input className="w-full text-lg rounded p-1 pl-4 focus:outline-none" type="text" placeholder="Search" onChange={onChangeHandler} value={keyword} autoFocus />
                    <button type="submit" className=" p-1 pl-4 pr-4 text-skin-secondary" >
                        <SearchIcon className="w-6 h-6" />
                    </button>
                </div>
                {/* Suggestion => will do later*/}
                {/* <div className="transform transition-all duration-1000 z-50">
                    <ul className="absolute z-50 top-full bg-white w-full mt-2 rounded-xl  shadow-md border border-t-0 border-b-0 ">
                        {suggestion && suggestion.map((suggestion, i) => <li key={i} onClick={() => onSuggestHandler(suggestion.name)} className="pl-8 pr-2 py-3 relative cursor-pointer hover:bg-yellow-100 hover:text-gray-900 hover:rounded-xl">
                            <svg className="absolute w-4 h-4 left-3 top-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                            {suggestion.name}
                        </li>)}
                    </ul>
                </div> */}
            </form>
        </>
    );
};

export default Searchbar;