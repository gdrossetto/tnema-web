import "./details.styles.scss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getConfig, getMovieById } from "../../services/movies.service.ts";

const Details = () => {
  let { id } = useParams();

  const [movie, setMovie] = useState({});
  const [config, setConfig] = useState({});

  async function getMovieDbConfig() {
    let configuration = await getConfig();
    console.log(configuration);
    setConfig(configuration?.images);
  }

  async function getMovie() {
    let movieDetails = await getMovieById(id);
    setMovie(movieDetails);
  }

  useEffect(() => {
    getMovieDbConfig();
  }, []);

  useEffect(() => {
    console.log(config);
    getMovie();
  }, [config]);

  return (
    <main className="bg-gray-700 py-6">
      <h1 className="text-green-200 font-bold text-6xl text-center">
        {movie?.original_title}
      </h1>
      {config?.backdrop_sizes ? (
        <img
          className={"details-backdrop"}
          src={`${config?.base_url}${config?.backdrop_sizes[3]}${movie?.backdrop_path}`}
          alt=""
        />
      ) : null}
      <div className={"text-white text-center mx-auto my-8"}>
        {movie.overview}
      </div>
    </main>
  );
};

export default Details;
