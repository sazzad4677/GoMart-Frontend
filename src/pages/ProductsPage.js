import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addItemToCart, removeItemFromCart } from "../actions/cartActions";
import { getProducts } from "../actions/productActions";
import Products from "../components/Products/Products";
import Footer from "../layout/Footer/Footer";
import Loader from "../layout/Loader/Loader";
import Metadata from "../layout/Metadata/Metadata";
import Nav from "../layout/Nav/Nav";
import Page from "../layout/Pagination/Page";
import FilterSection from "../layout/Products/FilterSection";
import TopBar from "../layout/Products/TopBar";

const ProductsPage = () => {
  const dispatch = useDispatch();
  // page number
  const [currentPage, setCurrentPage] = useState(1);
  // total product per page => default = 10
  const [resultPerPage, setResultPerPage] = useState(10);
  // filter by product price
  const [price, setPrice] = useState([1, 5000]);
  // Filter by  stock
  const [stock, setStock] = useState([]);
  // Filter by ratings
  const [ratings, setRatings] = useState(0);
  // sorting by price high to low / low to high
  const [sortType, setSortType] = useState("0");

  const [cartIcon, setCartIcon] = useState(true);
  // products data
  const productsData = useSelector((state) => state.products);
  const { cartItems } = useSelector((state) => state.cart);
  // Add to cart
  const addToCartButton = (id) => {
    dispatch(addItemToCart(id, 1));
    toast.success(`Successfully added to cart`);
    setCartIcon(true);
  };
  const removeCartItemHandler = (id) => {
    dispatch(removeItemFromCart(id));
    setCartIcon(false);
  };
  useEffect(() => {
    if (productsData.errors) {
      return toast.error(productsData.errors);
    }
    dispatch(
      getProducts(
        "",
        currentPage,
        resultPerPage,
        price,
        sortType,
        stock,
        ratings
      )
    );
  }, [
    dispatch,
    productsData.errors,
    currentPage,
    resultPerPage,
    price,
    sortType,
    stock,
    ratings,
  ]);

  return (
    <div>
      <Metadata title={"Search From Thousand Of Products"} />
      <Nav productsData={productsData} />
      {/* <Category/> */}
      <div className="mx-auto px-6 py-5 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-screen-xl lg:px-0 ">
        <div className="flex gap-3">
          <FilterSection
            price={price}
            setPrice={setPrice}
            setStock={stock}
            setRatings={setRatings}
          />
          <div className="flex w-full flex-col gap-6">
            <TopBar
              setResultPerPage={setResultPerPage}
              setSortType={setSortType}
            />
            <div>
              <Products
                productsData={productsData}
                addToCartButton={addToCartButton}
                removeCartItemHandler={removeCartItemHandler}
                cartIcon={cartIcon}
                cartItems={cartItems}
              />
            </div>
            <div className="border-t border-b">
              <Page
                resultPerPage={resultPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalProductsCount={productsData.totalProductsCount}
                filteredProductsCount={productsData.filteredProductsCount}
                productsLength={productsData.products.length}
                sortType={sortType}
              />
            </div>
          </div>
        </div>
      </div>
      {productsData.loading && <Loader />}
      <Footer />
    </div>
  );
};

export default ProductsPage;
