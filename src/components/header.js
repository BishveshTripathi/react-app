import React, { useState } from "react";

const Header = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    handleSearch(value);
  };

  return (
    <div className="header">
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleChange}
        ></input>
      </form>
      <div className="dropdown">
        <h3>Relevance</h3>
        <span class="material-symbols-outlined">expand_more</span>
        <h3>All brands</h3>
        <span class="material-symbols-outlined">expand_more</span>
      </div>
    </div>
  );
};
export default Header;
