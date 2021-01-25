import "./home.styles.scss";
import React, { useEffect, useState } from "react";
import {
  getConfig,
  getMovies,
  getMovieVideos,
} from "../../services/movies.service.ts";
import MovieCard from "../../components/movie-card/movie-card.component";

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
    getMovieVideos(464052);
  }, []);

  useEffect(() => {
    getFeaturedMovies();
  }, [config]);

  return (
    <main className="pt-4">
      <h1>Featured Movies</h1>
      <div className="item-list">
        {featured.map((movie, index) => {
          return <MovieCard movie={movie} config={config} />;
        })}
        <div className="invisible"></div>
        <div className="invisible"></div>
      </div>
    </main>
  );
};

export default Home;
