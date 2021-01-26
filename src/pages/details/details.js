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
    getMovie();
  }, [config]);

  return (
    <main>
      {config?.backdrop_sizes ? (
        <img
          className={"details-backdrop"}
          src={`${config?.base_url}${config?.backdrop_sizes[3]}${movie?.backdrop_path}`}
          alt=""
        />
      ) : null}
      <div className="details-desc">
        <h1 className="details-desc__title">
          {movie?.original_title} ({movie?.release_date?.split("-")[0]})
        </h1>
      </div>
      <div className="details-content mt-5">
        <div className="d-md-flex flex-row">
          {config?.poster_sizes ? (
            <img
              className={"details-content__poster"}
              src={`${config?.base_url}${config?.poster_sizes[3]}${movie?.poster_path}`}
              alt=""
            />
          ) : null}

          <div className="details-content__video">
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
          </div>
        </div>
      </div>
      <div className="details-content mt-5 p-4">
        <div className="details-content__section-title">Overview</div>
        <div className="details-content__overview">{movie?.overview}</div>
      </div>
    </main>
  );
};

export default Details;
