import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Category = ({ price ,setPrice}) => {
    const [minPrice, setMinPrice] = useState(parseInt(price[0]))
    const [maxPrice, setMaxPrice] = useState(parseInt(price[1]))
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
    return (
        <div className="w-1/5 ">
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
        </div>
    );
};

export default Category;