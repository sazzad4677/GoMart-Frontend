import React from 'react';
import Pagination from 'react-js-pagination';

const Page = ({ ...props }) => {
    let { resultPerPage, keyword, currentPage, setCurrentPage, counts  } = props
    const setCurrentPageNo = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (
        <div className="bg-white px-4 py-3 flex items-center justify-center sm:px-6 ">
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
    );
};

export default Page;