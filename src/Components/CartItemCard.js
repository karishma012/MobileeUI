import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CartItemCard = ({ item, sendQuantityToParent }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Use state to track the quantity
  const [quantity, setQuantity] = useState(1);
  console.log(quantity);

  const handleRemove = () => {
    // Display an alert
    alert(`${item.name} removed from cart`);

    // Navigate to the homepage
    navigate("/");
  };

  const handleIncreaseQuantity = () => {
    // Increase the quantity by 1
    setQuantity(quantity + 1);

    // Send the updated quantity to the parent component
    sendQuantityToParent(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    // Decrease the quantity by 1, but ensure it doesn't go below 1
    if (quantity > 1) {
      setQuantity(quantity - 1);

      // Send the updated quantity to the parent component
      sendQuantityToParent(quantity - 1);
    }
  };

  return (
    <div className="bg-gray-200 p-4 m-4 shadow-md rounded-lg">
      <div className="flex items-center justify-between">
        <div className="overflow-hidden w-16 h-16">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-28 overflow-hidden"
          />
        </div>

        <div className="flex-grow ml-4">
          <div className="flex flex-rows justify-between">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <button onClick={handleRemove}>
              {/* SVG Trash Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333"
                  stroke="#F70000"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <p className="text-gray-600">Size: {item.size}</p>

          <div className="flex flex-rows justify-between">
            <p className="pt-2">INR {item.price}</p>
            {/* Quantity buttons */}
            <div className="flex items-center">
              <button
                onClick={handleDecreaseQuantity}
                className="bg-gray-200 text-gray-700 border-solid border-2 border-black px-2 py-1 rounded-md"
              >
                -
              </button>
              <span className="p-2">{quantity}</span>
              <button
                onClick={handleIncreaseQuantity}
                className="bg-gray-200 text-gray-700 border-solid border-2 border-black px-2 py-1 rounded-md"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
