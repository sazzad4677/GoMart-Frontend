import React, { useState } from "react";
import Pagination from "react-js-pagination";

const Page = ({ ...props }) => {
  let {
    resultPerPage,
    keyword,
    currentPage,
    setCurrentPage,
    totalProductsCount,
    filteredProductsCount,
    sortType,
  } = props;
  // result count of total product count per page
  let counts =
    (keyword || sortType ? filteredProductsCount : totalProductsCount) || 0;
  const totalPageCount = Math.round(counts / resultPerPage);
  const [start, setStart] = useState(
    parseInt((currentPage - 1) * resultPerPage) + 1
  );
  const [end, setEnd] = useState(parseInt(currentPage * resultPerPage));
  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber);
    setStart(parseInt((pageNumber - 1) * resultPerPage) + 1);
    setEnd(parseInt(pageNumber * resultPerPage));
  };
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6 ">
      <div
        className="btn-group justify-self-center"
        role="navigation"
        aria-label="pagination"
      >
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={resultPerPage}
          totalItemsCount={counts + 1}
          onChange={setCurrentPageNo}
          nextPageText={"Next"}
          prevPageText={"Prev"}
          disabledClass="pagination-disabled"
          itemClass="pagination-link"
          activeClass="pagination-link pagination-active bg-skin-primary hover:bg-skin-primary hover:bg-opacity-80"
        />
      </div>
      <div className="font-display text-sm">
        Showing {start} to {end} of {counts} ({totalPageCount} Pages)
      </div>
    </div>
  );
};

export default Page;
