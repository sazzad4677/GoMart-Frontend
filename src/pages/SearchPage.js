import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../actions/productActions";
import Nav from "../layout/Nav/Nav";
import Page from "../layout/Pagination/Page";
import Loader from "../layout/Loader/Loader";
import Products from "../components/Products/Products";
import FilterSection from "../layout/Products/FilterSection";
import TopBar from "../layout/Products/TopBar";
import { toast } from "react-toastify";
import error404Image from "../images/404.png";
import Metadata from "../layout/Metadata/Metadata";

const SearchPage = () => {
  // Search keyword
  const { keyword } = useParams();
  // Page number
  const [currentPage, setCurrentPage] = useState(1);
  // price filter
  const [price, setPrice] = useState([parseInt(1), parseInt(5000)]);
  // per page result count
  const [resultPerPage, setResultPerPage] = useState(10);
  // sorting data by price high to low / low to high
  const [sortType, setSortType] = useState("0");
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.products);
  useEffect(() => {
    if (productsData.errors) {
      return toast.error(productsData.errors);
    }
    dispatch(getProducts(keyword, currentPage, resultPerPage, price, sortType));
  }, [
    dispatch,
    productsData.errors,
    currentPage,
    keyword,
    resultPerPage,
    price,
    sortType,
  ]);

  return (
    <div>
      <Metadata
        title={`${
          !keyword ? "Search From Thousand Of Products" : "Search - " + keyword
        }`}
      />
      <Nav productsData={productsData} />
      <div className="mx-auto  px-6 py-5 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-screen-xl lg:px-0">
        <div className="flex gap-3">
          <FilterSection price={price} setPrice={setPrice} />
          <div className="flex w-full flex-col gap-6">
            <TopBar
              setResultPerPage={setResultPerPage}
              setSortType={setSortType}
            />
            <div className="flex flex-col items-center justify-center  gap-3">
              {!productsData.products.length && (
                <>
                  <img
                    src={error404Image}
                    alt={"No Products Found"}
                    className="logo"
                  />
                  <p className="text-skin-secondary mx-auto text-center text-2xl">
                    No Products Found
                  </p>
                </>
              )}
              {!keyword && (
                <p className="text-skin-secondary mx-auto text-center text-2xl">
                  Search The products
                </p>
              )}
              {keyword && <Products productsData={productsData} />}
            </div>
            {keyword && (
              <div className="border-t border-b">
                <Page
                  resultPerPage={resultPerPage}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalProductsCount={productsData?.totalProductsCount}
                  filteredProductsCount={productsData?.filteredProductsCount}
                  productsLength={productsData.products?.length}
                  keyword={keyword}
                  sortType={sortType}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {productsData.loading && <Loader />}
    </div>
  );
};

export default SearchPage;
