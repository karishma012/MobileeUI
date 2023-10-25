import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CartItemCard from "../Components/CartItemCard";

const Cart = () => {
  // Access the location state to get the item details
  const location = useLocation();
  const itemToAddToCart = location.state?.item;
  const { item } = location.state || {};
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [voucher, setVoucher] = useState("");

  // Function to receive data from the Card component
  const receiveQuantityFromCard = (quantity) => {
    setTotalQuantity(quantity);
  };

  return (
    <div className="container mx-auto md:w-2/6 border-2 border-solid border-gray-600">
      <div className="bg-white h-screen p-0 relative">
        {/* Navbar Component for all Codes */}
        <div className="p-2 flex justify-between items-center">
          {/* Back Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="cursor-pointer"
          >
            <path 
              d="M19 12H5M5 12L12 5M5 12L12 19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Text in Black Color */}
          <h2 className="text-black text-lg font-bold text-center flex-grow">
            My Cart
          </h2>

          {/* Bell Icon */}
          <div className="absolute top-3 right-2 mr-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="text-black cursor-pointer"
            >
              <circle cx="7" cy="7" r="6.5" fill="black" stroke="white" />
              <path
                d="M7.86415 9.71971V5H6V5.83782H6.89367V9.71971H7.86415Z"
                fill="white"
              />
            </svg>
          </div>
          {/* Original bell icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6 text-white cursor-pointer"
          >
            <path
              d="M9.35416 21C10.0593 21.6224 10.9855 22 12 22C13.0144 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3678 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88257 2.63214 7.75735 3.75736C6.63213 4.88258 5.99999 6.4087 5.99999 8C5.99999 11.0902 5.22046 13.206 4.34965 14.6054C3.61512 15.7859 3.24785 16.3761 3.26131 16.5408C3.27622 16.7231 3.31485 16.7926 3.46176 16.9016C3.59445 17 4.19258 17 5.38884 17H18.6111C19.8074 17 20.4055 17 20.5382 16.9016C20.6851 16.7926 20.7238 16.7231 20.7387 16.5408C20.7521 16.3761 20.3849 15.7859 19.6503 14.6054C18.7795 13.206 18 11.0902 18 8Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Code to Display rendered Card */}
        <div>
          {item ? (
            <CartItemCard item={item} sendQuantityToParent={receiveQuantityFromCard} />
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        {/* Text input box for voucher */}
        <div className="p-2 absolute top-1/2 w-full">
          <input
            type="text"
            id="voucher"
            name="voucher"
            className="block w-full rounded-lg bg-gray-200 p-2 mt-1"
            value={voucher}
            onChange={(e) => setVoucher(e.target.value)}
            placeholder="Add a Voucher"
          />

          {/* Price Calculation */}
          <div className="mt-8 flex justify-between">
            <p className="text-gray-600">Sub-Total </p>
            <p>INR {totalQuantity*item.price}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">VAT (%)</p>
            <p>INR 0.00</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Shipping Fee</p>
            <p>INR 80</p>
          </div>

          {/* Total Price */}
          <div className="flex justify-between mt-8 pt-4 border-t-2 border-solid border-gray-800">
            <p>Total</p>
            <p>INR {totalQuantity*item.price +80}</p>
          </div>
          <div className="flex sticky bg-white shadow-lg z-50 bottom-0 justify-center p-2 m-2 border-t-2 border-gray-700">
            <button className="flex-grow bg-black text-white p-4 justify-center rounded-xl flex items-center">
              Checkout
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
