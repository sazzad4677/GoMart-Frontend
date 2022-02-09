import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Collapse } from 'react-collapse';
import { ChevronDownIcon } from "@heroicons/react/outline"
import ReactStars from "react-rating-stars-component";
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Category = ({ price, setPrice, setRatings }) => {
    const [minPrice, setMinPrice] = useState(parseInt(price[0]))
    const [maxPrice, setMaxPrice] = useState(parseInt(price[1]))
    const [availityCollapsed, setAvailityCollapsed] = useState(true)
    const [ratingCollapsed, setRatingCollapsed] = useState(true)
    // Price range sorting calculation
    const handelSubmittedPriceRange = (e) => {
        e.preventDefault();
        if ((minPrice < 0) || (maxPrice < 0)) {
            return toast.error("Max or Min price can't be negative number")
        }
        if (parseInt(minPrice) > parseInt(maxPrice)) {
            return toast.error("Max price can't be less than min price")
        }
        setPrice([minPrice, maxPrice]) // slider
    }
    const handelOnChangePriceSlider = (price) => {
        setPrice(price)
        setMinPrice(price[0])
        setMaxPrice(price[1])
    }
    const categories =
        [
            {
                type: "Food",
                productsCategory: [
                    "Fresh Vegetables",
                    "Meat",
                    "Frozen Fish",
                    "Dried Fish",
                    "Tofu & Meat Alternatives",
                    "Rice",
                    "Premium Ingredients",
                    "Colors & Flavours",
                    "Pickles",
                    "Spices",
                    "Oil",
                    "Ghee",
                    "Ready Mix",
                    "Salt & Sugar",
                    "Dal or Lentil",
                    "Special Ingredients",
                    "Shemai & Suji",
                    "Nuts & Dried Fruits",
                    "Baking Tools",
                    "Baking & Dessert Mixes",
                    "Baking Ingredients",
                    "Flour",
                    "Liquid & UHT Milk",
                    "Butter & Sour Cream",
                    "Cheese",
                    "Eggs",
                    "Powder Milk & Cream",
                    "Yogurt & Sweet",
                    "Yogurt & Sweet",
                    "Ice Cream",
                    "Frozen Snacks",
                    "Canned Food",
                    "Cookies",
                    "Bakery Snacks",
                    "Breads",
                    "Dips & Spreads",
                    "Honey",
                    "Cakes",
                    "Local Breakfast",
                    "Energy Boosters",
                    "Cereals",
                    "Jam & Spreads",
                    "Noodles",
                    "Soups",
                    "Pasta & Macaroni",
                    "Candy & Chocolate",
                    "Local Snacks",
                    "Chips & Pretzels",
                    "Popcorn & Nuts",
                    "Salad Dressing",
                    "Sauces",
                    "Tea",
                    "Coffee",
                    "Juice",
                    "Soft Drinks",
                    "Water",
                    "Syrups & Powder Drinks",
                    "Diabetic Food"
                ]
            },
            {
                type: "Hygiene",
                productsCategory: ["Hygiene"]
            },

            {
                type: "Beauty & Health",
                productsCategory: [
                    "Health Care",
                    "Personal Care"
                ]
            },
            {
                type: "Baby Care",
                productsCategory: ["Newborn Essentials",
                    "Diapers & Wipes",
                    "Feeders",
                    "Fooding",
                    "Bath & Skincare",
                    "Baby Accessories",
                    "Baby Oral Care"]
            },
            {
                type: "Pet care",
                productsCategory: ["Kitten Food",
                    "Cat Food",
                    "Dog Food",
                    "Other Pet Foods", "Pet Accessories"]
            },
            {
                type: "Cleaning Supplies",
                productsCategory: [
                    "Air Fresheners",
                    "Dishwashing Supplies",
                    "Toilet & Surface Cleaners",
                    "Laundry",
                    "Napkins & Paper Products",
                    "Pest Control",
                    "Shoe Care",
                    "Tableware & Trash Bags",
                    "Cleaning Accessories"
                ]
            },
            {
                type: "Home and Kitchen",
                productsCategory: ["Gardening",
                    "Kitchen Accessories",
                    "Lights & Electrical",
                    "Tools & Hardware",
                    "Kitchen Appliances"]
            },
            {
                type: "Stationery & Office",
                productsCategory: ["Batteries",
                    "Writing & Drawing",
                    "Organizers",
                    "Printing"]
            },
            {
                type: "Toys and Fun",
                productsCategory: ["Cars & Toy Vehicles",
                    "Dolls & Action Figures",
                    "Plush & Stuffed Animals",
                    "Cars & Toy Vehicles",
                    "Learning Toys"]
            },
            {
                type: "Sports and Fitness",
                productsCategory: ["Cricket",
                    "Badminton",
                    "Football",
                    "Other Sports"]
            },
            {
                type: "Vehicle Essentials",
                productsCategory: ["Vehicle Essentials"]
            }
        ]
    return (
        <div className="w-1/5 ">
            {/* Filter by Price */}
            <div className="flex flex-col gap-6">
                <div class="card rounded-lg shadow border">
                    <div class="card-header">
                        <div class="font-semibold text-skin-primary p-1 font-semibold">Price Range</div>
                    </div>
                    <div className="p-3">
                        <div className="pr-2 pl-2 flex flex-col justify-center">
                            <Range min={1} max={5000} default={[1, 5000]} tipFormatter={value => `${value}`} tipProps={{ placement: "top", visibility: true }} value={price}
                                onChange={handelOnChangePriceSlider}
                                trackStyle={[{ backgroundColor: '#40AA54', height: '10px' }]}
                                handleStyle={{
                                    border: "2px solid #40AA54",
                                    boxShadow: "0 0 0 4px #fff inset, 0 0 0 9px #40AA54 inset, 0 0 0 2px #fff",
                                    height: 20,
                                    width: 20,
                                    backgroundColor: '#40AA54',
                                }}
                                railStyle={{ backgroundColor: '#D3D3D3', height: '10px' }}
                            />
                        </div>
                        <div class="flex items-center justify-between pt-5 space-x-4 text-sm text-gray-700">
                            <form className="text-center" onSubmit={handelSubmittedPriceRange}>
                                <input type="number" name="Min"
                                    class="w-24 px-3 py-2 text-center border border-gray-200 rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none text-skin-primary text-base" onChange={(e) => setMinPrice(e.target.value)} value={minPrice} />
                                <label for="Min" className="text-skin-secondary"> Min</label>
                            </form>
                            <form className="text-center " onSubmit={handelSubmittedPriceRange}>
                                <input type="number" name="Max"
                                    class="w-24 px-3 py-2 text-center border border-gray-200 rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none text-skin-primary text-base" onChange={(e) => setMaxPrice(e.target.value)} value={maxPrice} />
                                <label for="Max" className="text-skin-secondary"> Max</label>
                            </form>
                        </div>
                    </div>
                </div>
                {/* TODO => Filter By Availity */}
                <div>
                    <div class="card rounded-lg shadow border">
                        <div class="card-header" onClick={() => setAvailityCollapsed(prev => !prev)} >
                            <div class="font-semibold text-skin-primary p-1 font-semibold">Availability</div>
                            <ChevronDownIcon className={`h-4 w-4 transition transform duration-1000 ${availityCollapsed && "rotate-180"}`}></ChevronDownIcon>
                        </div>
                        <Collapse isOpened={availityCollapsed} >
                            <div className="p-3">
                                <div className="pr-2 pl-2 flex flex-col justify-center gap-2">
                                    {["In Stock", "On Sale", "Newest", "Up coming", "Pre Order"].map(available => <label className="flex gap-2 items-center text-md font- text-gray-900 cursor-pointer ">
                                        <input type="checkbox" className="h-4 w-4 rounded" />
                                        <span>{available}</span>
                                    </label>)}
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
                {/* Filter By Review */}
                <div>
                    <div class="card rounded-lg shadow border">
                        <div class="card-header" onClick={() => setRatingCollapsed(prev => !prev)} >
                            <div class="font-semibold text-skin-primary p-1 font-semibold">Review</div>
                            <ChevronDownIcon className={`h-4 w-4 transition transform duration-1000 ${ratingCollapsed && "rotate-180"}`}></ChevronDownIcon>
                        </div>
                        <Collapse isOpened={ratingCollapsed} >
                            <div className="p-3">
                                <div className="pr-2 pl-2 flex flex-col justify-center gap-2">
                                    {
                                        [5, 4, 3, 2, 1].map(star => <label key={star} className="flex gap-2 items-center  text-gray-900 cursor-pointer " onChange={() => setRatings(star)}>
                                            <input type="checkbox" className="h-4 w-4 rounded" />
                                            <ReactStars
                                                value={star}
                                                size={24}
                                                activeColor="#ffd700"
                                                edit={false}
                                            />
                                        </label>)
                                    }
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;