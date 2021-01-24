export async function getMovies() {
  let movies = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=476a7e901b8459552d81da8f4a322ae7"
  );
  let moviesJson = await movies.json();
  return moviesJson;
}

export async function searchMovies(search) {
  if (search) {
    let movies = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=476a7e901b8459552d81da8f4a322ae7&query=${search}`
    );
    let moviesJson = await movies.json();
    return moviesJson;
  }
}

export async function getConfig() {
  let config = await fetch(
    "https://api.themoviedb.org/3/configuration?api_key=476a7e901b8459552d81da8f4a322ae7"
  );
  let configJson = await config.json();
  return configJson;
}
