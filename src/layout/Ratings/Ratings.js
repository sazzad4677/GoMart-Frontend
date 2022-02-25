import React from "react";
import { BsFillStarFill, BsStar } from "react-icons/bs";

const Ratings = ({active, width, height}) => {
  return (
    <div
      style={{
        boxSizing: "borderBox",
        display: "inline-flex",
        position: "relative",
        textAlign: "left",
      }}
    >
      {[...new Array(5)].map((arr, index) => {
        const activeState = active;

        const showEmptyIcon = activeState === -1 || activeState < index + 1;

        const isActiveRating = activeState !== 1;
        const isRatingWithPrecision = activeState % 1 !== 0;
        const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
        const showRatingWithPrecision =
          isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;

        return (
          <div
            style={{
              boxSizing: "borderBox",
              position: "relative",
            }}
            key={index}
          >
            <div
              style={{
                width: showRatingWithPrecision
                  ? `${(activeState % 1) * 100}%`
                  : "0%",
                overflow: "hidden",
                position: "absolute",
              }}
            >
              <BsFillStarFill className={`h-${height} w-${width} text-[#FFD700]`}  />
            </div>
            {/*Note here */}
            <div
              style={{
                color: showEmptyIcon ? "#FFD700" : "#FFD700",
              }}
            >
              {showEmptyIcon ? (
                <BsStar className={`h-${height} w-${width}`} />
              ) : (
                <BsFillStarFill className={`h-${height} w-${width}`} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Ratings;
