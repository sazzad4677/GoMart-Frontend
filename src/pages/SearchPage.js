import React, { useState } from 'react';
import Nav from '../layout/Nav/Nav';
import Search from '../components/Search/Search'
import Page from '../layout/Pagination/Page';
import { useSelector } from 'react-redux';
import Loader from '../layout/Loader/Loader';

const SearchPage = ({ ...props }) => {
    const navItems = [];
    const [suggestion, setSuggestion] = useState([])
    const { resultPerPage, currentPage, setCurrentPage, keyword } = props
    const productsData = useSelector(state => state.products)
    return (
        <div>
            {productsData.loading ? <Loader /> :
                <>
                    <Nav
                        fixed={""}
                        items={navItems}
                        suggestion={suggestion}
                        setSuggestion={setSuggestion}
                        productsData={productsData}
                        SearchBarShow={""}
                    />
                    <Search productsData={productsData} />
                    <Page
                        resultPerPage={resultPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalProductsCount={productsData.totalProductsCount}
                        filteredProductsCount={productsData.filteredProductsCount}
                        keyword={keyword}
                    /></>
            }
        </div>
    );
};

export default SearchPage;