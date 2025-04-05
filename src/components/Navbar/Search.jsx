import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import Button  from '../Button.jsx'; 
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate  = useNavigate()
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.searchAll);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // prevent page 
  

      setSearchTerm('');
      navigate(`/search/${searchTerm}`);
      
      // call your search function here
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div>
      <div className='flex items-center bg-[#3e3e3e] rounded-md'>
        <label className="flex py-1 items-center space-x-2 w-full">
          {/* Icon as part of the label */}
          <div className="px-1">
            <IoSearch color="white" size="30" />
          </div>
          {/* Input field */}
          <input
            type="text"
            placeholder="Search"
            className="outline-none px-2 py-1 bg-[#3e3e3e] text-white rounded-md w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </label>

        {/* Clear button */}
        <div>
          {searchTerm && (
            <Button
              type="button"
              onClick={clearSearch}
              className="p-0 flex justify-end items-center"
            >
              <RxCross2 size="30" color="white" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
