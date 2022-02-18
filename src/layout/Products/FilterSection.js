import React, { useState,useEffect } from "react";
import { toast } from "react-toastify";
import Slider from "rc-slider";
import { Collapse } from "react-collapse";
import { ChevronDownIcon } from "@heroicons/react/outline";
import ReactStars from "react-rating-stars-component";
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const FilterSection = ({ price, setPrice, setRatings }) => {
  const [minPrice, setMinPrice] = useState(parseInt(price[0]));
  const [maxPrice, setMaxPrice] = useState(parseInt(price[1]));
  const [availityCollapsed, setAvailityCollapsed] = useState(true);
  const [ratingCollapsed, setRatingCollapsed] = useState(true);
  // Price range sorting calculation
  const handelSubmittedPriceRange = (e) => {
    e.preventDefault();
    if (minPrice < 0 || maxPrice < 0) {
      return toast.error("Max or Min price can't be negative number");
    }
    if (parseInt(minPrice) > parseInt(maxPrice)) {
      return toast.error("Max price can't be less than min price");
    }
    setPrice([minPrice, maxPrice]); // slider
  };
  const handelOnChangePriceSlider = (price) => {
    setPrice(price);
    setMinPrice(price[0]);
    setMaxPrice(price[1]);
  };
  return (
    <div className="w-1/5 ">
      {/* Filter by Price */}
      <div className="flex flex-col gap-6">
        <div className="card rounded-lg border shadow">
          <div className="card-header">
            <div className="text-skin-primary p-1 font-semibold font-semibold">
              Price Range
            </div>
          </div>
          <div className="p-3">
            <div className="flex flex-col justify-center pr-2 pl-2">
              <Range
                min={1}
                max={5000}
                default={[1, 5000]}
                tipFormatter={(value) => `${value}`}
                tipProps={{ placement: "top", visibility: true }}
                value={price}
                onChange={handelOnChangePriceSlider}
                trackStyle={[{ backgroundColor: "#40AA54", height: "10px" }]}
                handleStyle={{
                  border: "2px solid #40AA54",
                  boxShadow:
                    "0 0 0 4px #fff inset, 0 0 0 9px #40AA54 inset, 0 0 0 2px #fff",
                  height: 20,
                  width: 20,
                  backgroundColor: "#40AA54",
                }}
                railStyle={{ backgroundColor: "#D3D3D3", height: "10px" }}
              />
            </div>
            <div className="flex items-center justify-between space-x-4 pt-5 text-sm text-gray-700">
              <form
                className="text-center"
                onSubmit={handelSubmittedPriceRange}
              >
                <input
                  type="number"
                  name="Min"
                  className="text-skin-primary w-24 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center text-base focus:border-yellow-400 focus:outline-none"
                  onChange={(e) => setMinPrice(e.target.value)}
                  value={minPrice}
                />
                <label htmlFor="Min" className="text-skin-secondary">
                  {" "}
                  Min
                </label>
              </form>
              <form
                className="text-center "
                onSubmit={handelSubmittedPriceRange}
              >
                <input
                  type="number"
                  name="Max"
                  className="text-skin-primary w-24 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center text-base focus:border-yellow-400 focus:outline-none"
                  onChange={(e) => setMaxPrice(e.target.value)}
                  value={maxPrice}
                />
                <label htmlFor="Max" className="text-skin-secondary">
                  {" "}
                  Max
                </label>
              </form>
            </div>
          </div>
        </div>
        {/* TODO => Filter By Availity */}
        <div>
          <div className="card rounded-lg border shadow">
            <div
              className="card-header"
              onClick={() => setAvailityCollapsed((prev) => !prev)}
            >
              <div className="text-skin-primary p-1 font-semibold font-semibold">
                Availability
              </div>
              <ChevronDownIcon
                className={`h-4 w-4 transform transition duration-1000 ${
                  availityCollapsed && "rotate-180"
                }`}
              ></ChevronDownIcon>
            </div>
            <Collapse isOpened={availityCollapsed}>
              <div className="p-3">
                <div className="flex flex-col justify-center gap-2 pr-2 pl-2">
                  {[
                    "In Stock",
                    "On Sale",
                    "Newest",
                    "Up coming",
                    "Pre Order",
                  ].map((available, key) => (
                    <label
                      key={key}
                      className="text-md font- flex cursor-pointer items-center gap-2 text-gray-900 "
                    >
                      <input type="checkbox" className="h-4 w-4 rounded" />
                      <span>{available}</span>
                    </label>
                  ))}
                </div>
              </div>
            </Collapse>
          </div>
        </div>
        {/* Filter By Review */}
        <div>
          <div className="card rounded-lg border shadow">
            <div
              className="card-header"
              onClick={() => setRatingCollapsed((prev) => !prev)}
            >
              <div className="text-skin-primary p-1 font-semibold font-semibold">
                Review
              </div>
              <ChevronDownIcon
                className={`h-4 w-4 transform transition duration-1000 ${
                  ratingCollapsed && "rotate-180"
                }`}
              ></ChevronDownIcon>
            </div>
            <Collapse isOpened={ratingCollapsed}>
              <div className="p-3">
                <div className="flex flex-col justify-center gap-2 pr-2 pl-2">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <label
                      key={star}
                      className="flex cursor-pointer items-center  gap-2 text-gray-900 "
                      onChange={() => setRatings(star)}
                    >
                      <input type="checkbox" className="h-4 w-4 rounded" />
                      <ReactStars
                        value={star}
                        size={24}
                        activeColor="#ffd700"
                        edit={false}
                      />
                    </label>
                  ))}
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
