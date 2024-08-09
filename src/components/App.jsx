import Navbar from "./Navbar";
import Main from "./Main";
import { tempMovieData } from "../data/movies";
import { useState } from "react";
import NumResults from "./Numresults";

import MovieList from "./MovieList";

import Box from "./ListBox";
import WatchedSummary from "./WatchedSummary";
import WatchedMovieList from "./WatchedMovieList";
import { tempWatchedData } from "../data/watched";

function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState([...tempWatchedData]);
  console.log(movies.typeof);
  console.log(movies.lenght);

  return (
    <>
      <Navbar>
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <>
            <WatchedSummary watched={watched} />
            <WatchedMovieList watched={watched} />
          </>
        </Box>
      </Main>
    </>
  );
}

export default App;
