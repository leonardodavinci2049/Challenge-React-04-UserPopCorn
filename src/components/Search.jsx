import React, { useState } from "react";

const Search = () => {
  const [Query, setQuery] = useState("");
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={Query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default Search;
