import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./components/StarRating";
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/*   <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    /> 

    <Test />
    {/* <StarRating maxRating={10} /> */}

*/}
  </React.StrictMode>
);

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        maxRating={10}
        color="blue"
        size={24}
        defaultRating={3}
        onsetRating={setMovieRating}
      />
      <p>This movies was rated {movieRating} stars</p>
      {/* <StarRating maxRating={10} /> */}
    </div>
  );
}
