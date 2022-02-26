import React, { useRef, useState } from "react";
import { BsFillStarFill, BsStar } from "react-icons/bs";

const Ratings = ({
  active,
  width,
  height,
  totalStars = 5,
  hoverable = true,
}) => {
  const [activeStar, setActiveStar] = useState(-1);
  //Similar to active star state, we need to handle hover state
  const [hoverActiveStar, setHoverActiveStar] = useState(-1);
  // Not necessary. But handy in readability of code.
  const [isHovered, setIsHovered] = useState(false);
  const ratingContainerRef = useRef(null);
  //Event listener for mouse move and leave
  const calculateRating = (e) => {
    const precision = 1;
    const { width, left } = ratingContainerRef.current.getBoundingClientRect();
    let percent = (e.clientX - left) / width;
    const numberInStars = percent * totalStars;
    const nearestNumber =
      Math.round((numberInStars + precision / 2) / precision) * precision;

    return Number(
      nearestNumber.toFixed(precision.toString().split(".")[1]?.length || 0)
    );
  };
  const handleClick = (e) => {
    setIsHovered(false);
    setActiveStar(calculateRating(e));
  };
  const handleMouseMove = (e) => {
    setIsHovered(true);
    setHoverActiveStar(calculateRating(e)); // We already calculation in this function
  };
  const handleMouseLeave = (e) => {
    setHoverActiveStar(-1); // Reset to default state
    setIsHovered(false);
  };
  const EmptyIcon = BsStar;
  const FiledIcon = BsFillStarFill;
  return (
    <>
      {hoverable ? (
        <div
          style={{
            boxSizing: "borderBox",
            display: "inline-flex",
            position: "relative",
            textAlign: "left",
          }}
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={ratingContainerRef}
        >
          {[...new Array(5)].map((arr, index) => {
            const activeState = isHovered ? hoverActiveStar : activeStar;;
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
                  <FiledIcon
                    className={`h-${height} w-${width} text-[#FFD700]`}
                  />
                </div>
                <div
                  style={{
                    color: "#FFD700",
                  }}
                >
                  {showEmptyIcon ? (
                    <EmptyIcon className={`h-${height} w-${width}`} />
                  ) : (
                    <FiledIcon className={`h-${height} w-${width}`} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        // If hover false
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
                  <BsFillStarFill
                    className={`h-${height} w-${width} text-[#FFD700]`}
                  />
                </div>
                <div
                  style={{
                    color: "#FFD700",
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
      )}
    </>
  );
};

export default Ratings;
