import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ProductDetails from "../components/Products/ProductDetails";
import Reviews from "../components/Reviews/Reviews";
import Footer from "../layout/Footer/Footer";
import Nav from "../layout/Nav/Nav";
import Loader from "../layout/Loader/Loader";
import Metadata from "../layout/Metadata/Metadata";
import { clearErrors, getProductDetails } from "../actions/productActions";
import { addItemToCart } from "../actions/cartActions";

const ProductDetailsPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
  const [quantity, setQuantity] = useState(1);
  const addToCartButton = () => {
    dispatch(addItemToCart(params.id, quantity));
    toast.success(`Successfully added to cart`);
  };
  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
      return toast.error(error);
    }
    dispatch(getProductDetails(params.id));
  }, [dispatch, error, params.id]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-[#F3F4F6]">
          <Metadata title={`${product?.name} Details`} />
          <Nav />
          <div className="mx-auto px-6 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-screen-xl lg:px-0">
            <ProductDetails
              product={product}
              loading={loading}
              addItemToCart={addItemToCart}
              addToCartButton={addToCartButton}
              quantity={quantity}
              setQuantity={setQuantity}
            />
            <Reviews />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ProductDetailsPage;
