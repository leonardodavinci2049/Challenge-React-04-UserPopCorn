import React from "react";

const NumResults = ({ movies }) => {
   
  return (
    <p className="num-results">
      Found <strong>{movies.lenght}</strong> results
    </p>
  );
};

export default NumResults;
