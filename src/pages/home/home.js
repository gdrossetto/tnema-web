import "./home.styles.scss";
import React, { useEffect, useState } from "react";
import { getConfig, getMovies } from "../../services/movies.service.ts";

const Home = () => {
  const [featured, setFeatured] = useState([]);
  const [config, setConfig] = useState({});

  async function getFeaturedMovies() {
    let movies = await getMovies();
    setFeatured(movies?.results);
  }

  async function getMovieDbConfig() {
    let configuration = await getConfig();
    setConfig(configuration?.images);
  }

  useEffect(() => {
    getMovieDbConfig();
  }, []);

  useEffect(() => {
    getFeaturedMovies();
  }, [config]);

  return (
    <main className="bg-gray-700 p-6">
      <h1 className="text-green-200 font-bold text-6xl text-center">
        Featured Movies
      </h1>
      <div className="item-list">
        {featured.map((movie, index) => {
          return (
            <article
              className="mb-8 shadow-xl p-4 hover:bg-green-300"
              key={movie?.id}
            >
              <img
                className={"w-1/4"}
                src={`${config.base_url}${config.poster_sizes[3]}${movie.poster_path}`}
                alt=""
              />
            </article>
          );
        })}
        <div className="invisible"></div>
        <div className="invisible"></div>
      </div>
    </main>
  );
};

export default Home;
