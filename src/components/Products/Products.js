import React, { useState } from "react";
import { ShoppingCartIcon, HeartIcon, StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Products = ({ ...props }) => {
  const {
    productsData: { products },
  } = props;
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
    <>
      <div className="row-gap-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products &&
          products.map((product) => (
            <Link
              to={`/products/${product._id}`}
              className="group shadow-4xl mb-4 block overflow-hidden rounded-lg border border-t-0 bg-white hover:shadow-lg "
              key={product._id}
            >
              <div className="relative overflow-hidden pb-48">
                {/* Product Image */}
                {product.images?.map((image) => (
                  <img
                    className="translate absolute inset-0 h-full w-full transform object-cover duration-1000 group-hover:scale-110"
                    src={image.url}
                    alt=""
                  />
                ))}
                {/* Buy Now button */}
                <Link
                  to="#"
                  className={`bg-skin-inverted absolute bg-opacity-0 opacity-0 group-hover:bg-opacity-50 group-hover:opacity-100 
                  } transform-opacity h-full w-full cursor-pointer duration-500`}
                  onClick={BuyNow}
                >
                  <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform gap-6 ">
                    <button
                      className="font-body text-2xl font-extrabold text-white"
                    >
                      Buy Now
                    </button>
                  </div>
                </Link>
              </div>
              <div className="p-4 h-64">
                {/* product tag */}
                <div className="flex justify-between ">
                  <span className="badge bg-skin-primary text-skin-label-text-2 border-transparent">
                    On Sale
                  </span>
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
                <div className="font-display text-skin-primary flex items-center justify-between">
                  {/* product name */}
                  <h1 className="mt-2 mb-2  truncate text-ellipsis whitespace-nowrap text-lg font-bold">
                    {product.name}
                  </h1>
                  <div className="flex items-center">
                    {/* product review */}
                    <p className="text-skin-secondary">
                      {product.ratings ? product.ratings : 0}
                    </p>
                    <StarIcon className="text-skin-base h-4 w-4" />
                  </div>
                </div>
                {/* Product Seller */}
                <p className="font-display mb-2 flex items-center text-xs truncate text-ellipsis whitespace-nowrap">
                  <span className="font-semibold">Brand:&nbsp;</span>{" "}
                  {product.seller}
                </p>
                {/* Product Small Description */}
                <article className="small-text h-24">
                  {product.description?.length > 10 && product.description?.split(" ").splice(0,15).join(" ") }
                </article>
                <div className="flex gap-3">
                  {/* Product price */}
                  <div className="mt-3 flex items-center">
                    <span className="text-sm font-semibold">Price:&nbsp;৳</span>
                    &nbsp;
                    <span className="text-xl font-bold">{product.price}</span>
                    &nbsp;
                  </div>
                  <div className="mt-3 flex items-center">
                    <strike className="text-sm font-normal ">৳ 520</strike>
                    <span className="text-skin-base ml-3 text-sm font-bold">
                      75%
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Products;
