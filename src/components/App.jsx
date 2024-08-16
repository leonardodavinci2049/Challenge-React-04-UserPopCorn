import Navbar from "./Navbar";
import Main from "./Main";
//import { tempMovieData } from "../data/movies";
import { useEffect, useState } from "react";
import NumResults from "./Numresults";
import { useMovies } from "../hooks/useMovies";
import MovieList from "./MovieList";

import Box from "./ListBox";
import WatchedSummary from "./WatchedSummary";
import WatchedMovieList from "./WatchedMovieList";

import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import Search from "./Search";
import MovieDetails from "./MovieDetails";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

function App() {
  const [query, setQuery] = useState("inception");
  const [selectedId, setSelectedId] = useState(null);

  const { movies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectMovie(id) {
    setSelectedId((selectedID) => (id === selectedID ? null : id));
  }

  function handleCloseMovie(id) {
    setSelectedId(null);
  }
  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            ></MovieDetails>
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

export default App;
