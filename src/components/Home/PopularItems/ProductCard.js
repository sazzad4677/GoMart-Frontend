import React, { Fragment } from "react";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/solid";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({ items }) => {
  const {
    id,
    ProductName,
    ProductPrice,
    Brand,
    SellerName,
    Ratings,
    Size,
    Quantity,
    TotalOrder,
  } = items;
  const firstExample = {
    size: 24,
    value: Ratings,
    edit: false,
    activeColor: "#40AA54",
  };
  const handelShoppingCart = () => {
    console.log("Shopping Cart");
  };
  const handelWishList = () => {
    console.log("wish list");
  };

  return (
    <Fragment>
      <div className="block bg-cultured-white rounded-lg overflow-hidden mb-10 group shadow-2xl">
        <div className="relative pb-48 overflow-hidden ">
          <img
            className="absolute inset-0 h-full w-full object-cover transform translate group-hover:scale-110 duration-1000"
            src="https://media.istockphoto.com/photos/tomatoes-picture-id98026003?b=1&k=20&m=98026003&s=170667a&w=0&h=185rOlPM5RueuxjOUFCinuQICXAnUM9AIq_tDELKO4Q="
            alt=""
          />
          <div className="absolute bg-black bg-opacity-0 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-50 h-full w-full transform-opacity duration-500">
            <div className="absolute flex gap-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <ShoppingCartIcon
                className="text-green-pantone h-10 w-10 cursor-pointer"
                onClick={handelShoppingCart}
              />
              <HeartIcon
                className="text-red-400 h-10 w-10 cursor-pointer"
                onClick={handelWishList}
              />
            </div>
          </div>
        </div>
        <div className="p-4">
          {/* product tag */}
          <div className="flex gap-2 ">
            <span className="badge border-transparent bg-green-pantone text-white">
              On Sale
            </span>
          </div>
          <div className="flex items-center justify-between">
            {/* product name */}
            <h1 className="mt-2 mb-2  font-bold text-lg">
              {ProductName} -<span className="font-normal text-sm"> 3 KG</span>
            </h1>
          </div>
          {/* Product Seller */}
          <p className="flex font-display items-center mb-2 text-xs">
            <span className="font-semibold">Brand:&nbsp;</span> {SellerName}
          </p>
          {/* Product Small Description */}
          <article className="small-text">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
            ullamcorper nulla non metus auctor fringilla.
          </article>
          <div className="flex gap-3">
            <div className="flex items-center mt-3">
              <span className="text-sm font-semibold">Price:&nbsp;৳</span>&nbsp;
              <span className="font-bold text-xl">{ProductPrice}</span>&nbsp;
            </div>
            <div className="flex items-center mt-3">
              <span className="font-normal text-sm  line-through">৳ 520</span>
              <span className="font-bold text-sm ml-3 text-green-pantone">
                75%
              </span>
            </div>
          </div>
        </div>
        {/* Review */}
        <div className="p-4 border-t flex items-center text-sm text-gray-600">
          <ReactStars {...firstExample} />
          <span className="ml-2">{Ratings} Reviews</span>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
