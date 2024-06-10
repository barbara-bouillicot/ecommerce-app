import React from 'react';
import "./Search.css"

function Search({ setQuery }) {
  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for furniture..."
          className="search-input"
          onChange={handleSearchChange}
        />
        <button className="search-button">
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
