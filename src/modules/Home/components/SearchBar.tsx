import React from "react";

const SearchBar = () => {
  return (
    <div className="custom-search">
      <input
        type="text"
        className="custom-search-input"
        placeholder="Search"
      />
      <button className="custom-search-botton" type="submit">
      <i className="fas fa-share"></i>
      </button>
    </div>
  );
};

export default SearchBar;
