import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../components/movie-card/movie-card.component";
import { getConfig } from "../../services/movies.service.ts";

const WatchList = () => {
    const [config,setConfig] = useState({});
    const movieList = useSelector((state) => state.watchList);
  
  async function getMovieDbConfig() {
    let configuration = await getConfig();
    setConfig(configuration?.images);
  }

  useEffect(() => {
    getMovieDbConfig();
  }, []);

  return (
    <main className="pt-4">
      <h1>Watchlist</h1>
      <div className="item-list">
        {movieList.map((movie, index) => {
          return <MovieCard key={movie.id} movie={movie} config={config} />;
        })}
        <div className="invisible"></div>
        <div className="invisible"></div>
      </div>
    </main>
  );
};
export default WatchList;
