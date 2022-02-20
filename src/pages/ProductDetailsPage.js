import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { clearErrors, getProductDetails } from "../actions/productActions";
import ProductDetails from "../components/Products/ProductDetails";
import Reviews from "../components/Reviews/Reviews";
import Footer from "../layout/Footer/Footer";
import Nav from "../layout/Nav/Nav";

const ProductDetailsPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
      return toast.error(error);
    }
    dispatch(getProductDetails(params.id));
  }, [dispatch, error, params.id]);
  return (
    <div className="bg-[#F3F4F6]">
      <Nav />
      <ProductDetails product={product} loading={loading} />
      <Reviews />
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
