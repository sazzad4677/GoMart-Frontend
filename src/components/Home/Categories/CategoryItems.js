import React from "react";

const CategoryItems = ({ image, name }) => {
  return (
    <>
      <div className="category-data">
        <img src={image} alt={name} className="w-12 h-12" />
      </div>
      <h6 className="mb-2 font-semibold leading-5">{name}</h6>
    </>
  );
};

export default CategoryItems;
