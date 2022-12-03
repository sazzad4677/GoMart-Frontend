import React, { Fragment, useState } from "react";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/solid";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({ items }) => {
  const { name, price, seller, ratings } = items;
  const firstExample = {
    size: 24,
    value: ratings,
    edit: false,
    activeColor: "#40AA54",
  };
  const handelShoppingCart = () => {
    console.log("Shopping Cart");
  };

  const [state, setState] = useState(false);

  const handelWishList = () => {
    setState((prev) => !prev);
  };
  const BuyNow = () => {
    console.log("buy now");
  };

  return (
    <Fragment>
      <div className="group shadow-4xl mb-10 block overflow-hidden rounded-lg border border-t-0 bg-white hover:shadow-lg ">
        <div className="relative overflow-hidden pb-48">
          <img
            className="translate absolute inset-0 h-full w-full transform object-cover duration-1000 group-hover:scale-110"
            src={items?.images?.[0].url}
            alt={items?.name}
          />
          <div
            className="bg-skin-inverted transform-opacity absolute h-full w-full cursor-pointer bg-opacity-0 opacity-0 duration-500 group-hover:bg-opacity-50 group-hover:opacity-100"
            onClick={BuyNow}
          >
            <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform gap-6 ">
              <button className="font-body text-2xl font-extrabold text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 ">
          {/* product tag */}
          <div className="flex gap-2 ">
            <span className="badge bg-skin-primary text-skin-label-text-2 border-transparent">
              On Sale
            </span>
          </div>
          <div className="font-display text-skin-primary flex items-center justify-between">
            {/* product name */}
            <h1 className="mt-2 mb-2  text-lg font-bold truncate">
             <span >{name}</span> -<span className="text-lg font-normal"> 3 KG</span>
            </h1>
            <div className="flex gap-4">
              <ShoppingCartIcon
                className="text-green h-6 w-6 cursor-pointer"
                onClick={handelShoppingCart}
              />
              <HeartIcon
                className="text-red h-6 w-6 cursor-pointer"
                onClick={handelWishList}
              />
            </div>
          </div>
          {/* Product Seller */}
          <p className="font-display mb-2 flex items-center text-xs">
            <span className="font-semibold">Brand:&nbsp;</span> {seller}
          </p>
          {/* Product Small Description */}
          <article className="small-text">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
            ullamcorper nulla non metus auctor fringilla.
          </article>
          <div className="flex gap-3">
            <div className="mt-3 flex items-center">
              <span className="text-sm font-semibold">Price:&nbsp;৳</span>&nbsp;
              <span className="text-xl font-bold">{price}</span>&nbsp;
            </div>
            <div className="mt-3 flex items-center">
              <strike className="text-sm font-normal ">৳ 520</strike>
              <span className="text-skin-base ml-3 text-sm font-bold">75%</span>
            </div>
          </div>
        </div>
        {/* Review */}
        <div className="text-skin-secondary flex items-center justify-between border-t p-4 text-sm">
          <ReactStars {...firstExample} />
          <span className="ml-2">{ratings} Reviews</span>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
