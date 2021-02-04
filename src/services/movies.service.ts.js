const apiKey = "476a7e901b8459552d81da8f4a322ae7";

export async function getMovies() {
  let movies = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
  );
  let moviesJson = await movies.json();
  return moviesJson;
}

export async function getMovieById(id) {
  let movies = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
  );
  let moviesJson = await movies.json();
  return moviesJson;
}

export async function searchMovies(search) {
  if (search) {
    let movies = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`
    );
    let moviesJson = await movies.json();
    return moviesJson;
  }
}

export async function getConfig() {
  let config = await fetch(
    `https://api.themoviedb.org/3/configuration?api_key=${apiKey}`
  );
  let configJson = await config.json();
  return configJson;
}

export async function getMovieVideos(movieId) {
  let videos = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
  );
  let videosJson = await videos.json();
  console.log(videosJson.results);
  return videosJson.results;
}

export async function getMovieGenres(){
  let generos = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
  );
  let generosJson = await generos.json();
  console.log(generosJson.genres);
  return generosJson.genres;
}