import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { GiStarFormation } from "react-icons/gi";
import { MdStarPurple500 } from "react-icons/md";
const StarRating = ({ maxNoOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const handleClick = (value) => {
    // console.log("handleClick: ", value);
    setRating(value);
  };
  const handleMouseEnter = (value) => {
    // console.log("handleMouseEnter: ", value);
    setHover(value);
  };
  const handleMouseLeave = (value) => {
    console.log("handleMouseLeave: ", value);
    setHover(null);
  };

  return (
    <div className="w-full  flex flex-col items-center justify-center bg-sky-50 p-4">
      {/* Title */}
      <h1 className="text-2xl w-full text-center font-bold bg-sky-700 text-white mb-6 py-2 rounded-2xl">
        Star Rating
      </h1>{" "}
      <h2 className="text-xl text-sky-500 font-bold mb-4">Rate Us</h2>
      <div className="flex gap-2">
        {[...Array(maxNoOfStars)].map((_, index) => {
          const starValue = index + 1;
          return (
            <FaStar
              className={`cursor-pointer text-3xl transition-colors duration-300
                ${
                  starValue <= (hover || rating)
                    ? "text-amber-400"
                    : "text-gray-300"
                }`}
              key={index}
              onClick={() => handleClick(starValue)}
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={() => handleMouseLeave(starValue)}
            />
          );
        })}
      </div>
      {rating > 0 && (
        <>
          <p className="flex items-center gap-x-1 text-lg my-2 italic text-sky-500 font-semibold">
            You Rated {rating}
            <span className="text-2xl text-sky-500 animate-pulse">
              <MdStarPurple500 />
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default StarRating;
