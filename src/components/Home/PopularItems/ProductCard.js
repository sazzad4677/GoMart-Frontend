import React, { Fragment } from "react";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/solid";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({ items }) => {
  const {
    id,
    ProductName,
    productPrice,
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

  // TotalOrder: 274,
  return (
    <Fragment>
      <div className="block bg-cultured-white shadow-md hover:shadow-xl rounded-lg overflow-hidden mb-10">
        <div className="relative pb-48 overflow-hidden">
          {/* Product Image */}
          <img
            className="absolute inset-0 h-full w-full object-cover transition transform hover:scale-105 duration-700"
            src="https://media.istockphoto.com/photos/tomatoes-picture-id98026003?b=1&k=20&m=98026003&s=170667a&w=0&h=185rOlPM5RueuxjOUFCinuQICXAnUM9AIq_tDELKO4Q="
            alt=""
          />
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
            {/* add to wishlist & cart */}
            <div className="flex items-center space-x-5">
              <button>
                <HeartIcon className="h-6 w-6 text-red-400" />
              </button>
              <button>
                <ShoppingCartIcon className="h-6 w-6 text-green-pantone" />
              </button>
            </div>
          </div>
          {/* Product Seller */}
          <p className="flex font-display items-center mb-2 text-xs">
            {SellerName}
          </p>
          {/* Product Small Description */}
          <article className="small-text">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
            ullamcorper nulla non metus auctor fringilla.
          </article>
          <div className="flex gap-3">
            <div className="flex items-center mt-3">
              <span className="text-sm font-semibold">Price: </span>&nbsp;
              <span className="text-sm font-semibold mr-1"> ৳</span>
              <span className="font-bold text-xl">{productPrice}</span>&nbsp;
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
          <span className="ml-2">3 Reviews</span>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
