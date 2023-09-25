import React, { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Implement your search functionality here using the searchQuery state.
    console.log("Search Query:", searchQuery);
    // You can replace the console.log with your actual search logic.
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="container mx-auto md:w-2/6 ">
      <div className="bg-white h-fit p-2">
        <div className="p-2 flex justify-between items-center relative">
          <h1 className="text-black text-3xl font-bold">Discover</h1>
          <div className="absolute top-3 right-2 mr-0">
            {/* Second bell icon on top right */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="text-white cursor-pointer"
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

        <div className="bg-white p-2">
          <div className="flex items-center mb-4">
            <div className="bg-gray-100 p-2 rounded-l-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-500 text-2xl"
              >
                <path
                  d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search anything"
              className="rounded-r-lg p-2 flex-1 bg-gray-100 focus:outline-none"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
            />
            <div className="bg-black rounded-lg m-2 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white text-3xl"
              >
                <path
                  d="M6 12H18M3 6H21M9 18H15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="flex space-x-8">
            <button className="flex-grow bg-black text-white px-4 py-1 rounded-md">
              All
            </button>
            <button className="flex-grow bg-gray-100 text-black px-4 py-1 rounded-md">
              Men
            </button>
            <button className="flex-grow bg-gray-100 text-black px-4 py-1 rounded-md">
              Women
            </button>
            <button className="flex-grow bg-gray-100 text-black px-4 py-1 rounded-md">
              Kids
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
