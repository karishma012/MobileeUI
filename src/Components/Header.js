import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement your search functionality here using the searchQuery state.
    console.log('Search Query:', searchQuery);
    // You can replace the console.log with your actual search logic.
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='container w-2/6'>
    <div className="bg-white h-screen">
      <div className=" p-4 flex justify-between items-center">
        <h1 className="text-black text-3xl font-bold">Discover</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {<FontAwesomeIcon icon={faBell} className='text-black'/>}
        </svg>
      </div>
      <div className="bg-white p-4">
        <div className="flex items-center space-x-2 mb-4">
       
        <div className="">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500 text-2xl" />
            </div>
          <input
          
            type="text"
            placeholder= "Search anything"
            className="border rounded-md p-2 flex-1 bg-gray-100"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
          />
          <FontAwesomeIcon icon={faFilter} className='text-white text-3xl bg-black'/>
        </div>
        <div className="flex space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded-md">
            All
          </button>
          <button className="bg-gray-100 text-black px-4 py-2 rounded-md">
            Men
          </button>
          <button className="bg-gray-100 text-black px-4 py-2 rounded-md">
            Women
          </button>
          <button className="bg-gray-100 text-black px-4 py-2 rounded-md">
            Kids
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
