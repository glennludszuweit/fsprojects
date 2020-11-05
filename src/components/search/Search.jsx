import React from 'react';
import './Search.css';

const Search = ({ placeholder, handleChange }) => {
  return (
    <div className='search-box'>
      <input
        type='search'
        className='search-bar'
        name='search'
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
