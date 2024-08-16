const KEY = process.env.REACT_APP_API_KEY;

export const getMoviedetails = async (id) => {
  const url = `https://www.omdbapi.com/?apikey=${KEY}&i=${id}`;

  const resp = await fetch(url);
  const data = await resp.json();

  const movie = {
    imdbID: data.imdbID,
    Title: data.Title,
    Year: data.Year,
    Poster: data.Poster,
    Runtime: data.Runtime,
    imdbRating: data.imdbRating,
    Plot: data.Plot,
    Released: data.Released,
    Actors: data.Actors,
    Director: data.Director,
    Genre: data.Genre,
  };

  //  console.log(gifs);
  return movie;
};
