import React, { useState } from "react";
import "./Styles/DashboardSearchBar.css";
const DashboardSearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };
  return (
    <>
      <div className="body_top">
        <h1>Welcome Vishal</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for apps "
            value={query}
            onChange={handleInputChange}
          />
          <button className="searchButton" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default DashboardSearchBar;
