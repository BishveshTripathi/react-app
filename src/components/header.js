import React from "react";

const header = () => {
  return (
    <div className="header">
      <form>
        <input type="text" placeholder="Search..."></input>
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

export default header;
