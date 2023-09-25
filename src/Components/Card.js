import React, { useState } from "react";

const Card = ({ data }) => {
  // State to track whether the item is in the wishlist
  const [isInWishlist, setIsInWishlist] = useState(false);

  // Function to toggle the wishlist status
  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  // Determine the color of the SVG based on the wishlist status
  const svgColor = isInWishlist ? "red" : "black";

  return (
    <div className="w-48 h-60 flex-shrink-0 overflow-hidden bg-white shadow-lg rounded-lg">
      <div className="relative">
        <div
          className="w-full h-44 overflow-hidden"
          style={{
            backgroundImage: `url(${data.imageUrl})`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <button
          className="absolute top-4 right-4 bg-white rounded-md p-2"
          onClick={toggleWishlist}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            stroke={svgColor} // Apply color here
            strokeWidth="1.85"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.4937 3.22563C8.64426 1.06352 5.56026 0.481919 3.24309 2.46176C0.925921 4.44161 0.599695 7.7518 2.41938 10.0934C3.79383 11.862 7.69845 15.4126 9.52691 17.0443C9.86303 17.3442 10.0311 17.4942 10.2279 17.5532C10.3987 17.6045 10.5886 17.6045 10.7594 17.5532C10.9562 17.4942 11.1243 17.3442 11.4604 17.0443C13.2889 15.4126 17.1935 11.862 18.5679 10.0934C20.3876 7.7518 20.1012 4.42078 17.7442 2.46176C15.3872 0.502745 12.3431 1.06352 10.4937 3.22563Z"
            />
          </svg>
        </button>
      </div>
      <div className="p-2">
        <h4 className="text-md font-bold">{data.name}</h4>
        <p className="text-gray-600">INR {data.price}</p>
      </div>
    </div>
  );
};

export default Card;
