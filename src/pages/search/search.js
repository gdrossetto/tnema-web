import "./search.styles.scss";
import React, { useEffect, useState } from "react";
import {
  getConfig,
  getMovies,
  searchMovies,
} from "../../services/movies.service.ts";
import { useHistory, useLocation } from "react-router-dom";
import MovieCard from "../../components/movie-card/movie-card.component";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const [featured, setFeatured] = useState([]);
  const [config, setConfig] = useState({});
  const [searchString, setSearchString] = useState("");
  const history = useHistory();

  let query = useQuery();

  async function getFeaturedMovies(searchQuery) {
    let movies = await searchMovies(searchQuery);
    setFeatured(movies?.results);
  }

  async function getMovieDbConfig() {
    let configuration = await getConfig();
    setConfig(configuration?.images);
  }

  useEffect(() => {
    setSearchString(query.get("search"));
    getMovieDbConfig();
  }, []);

  useEffect(() => {
    getFeaturedMovies(query.get("search"));
  }, [config]);

  useEffect(() => {
    getFeaturedMovies(query.get("search"));
  }, [query.get("search")]);

  return (
    <main>
      <div className="col-md-6 m-auto mb-5">
        <h1 className="mb-5 mt-5">What are you looking for?</h1>
        <form className="d-flex flex-row">
          <input
            type="text"
            className="form-control"
            id="searchString"
            value={searchString}
            aria-describedby="search"
            onChange={(e) => setSearchString(e.target.value)}
          />
          <button
            onClick={() => {
              history.push({
                pathname: "/search",
                search: `?search=${searchString}`,
              });
            }}
            className="btn btn-secondary"
            type="button"
          >
            Search
          </button>
        </form>
      </div>
      <h1>Search Results</h1>

      <div className="item-list">
        {featured?.length > 0 ? (
          featured?.map((movie, index) => {
            return <MovieCard movie={movie} config={config} />;
          })
        ) : (
          <b className="">No Results</b>
        )}
        <div className="invisible"></div>
        <div className="invisible"></div>
      </div>
    </main>
  );
};

export default Search;
