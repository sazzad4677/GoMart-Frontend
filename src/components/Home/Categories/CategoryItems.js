import React from "react";

const CategoryItems = ({ image, name }) => {
  return (
    <>
      <div className="category-data">
        <img src={image} alt={name} className="h-14 w-14" />
      </div>
      <h6 className="font-semibold leading-5">{name}</h6>
    </>
  );
};

export default CategoryItems;
