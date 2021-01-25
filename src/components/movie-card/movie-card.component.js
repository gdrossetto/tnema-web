import "./movie-card.component.styles.scss";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getConfig } from "../../services/movies.service.ts";

const MovieCard = ({ movie, config }) => {
  const history = useHistory();

  return (
    <article
      onClick={() => {
        history.push({
          pathname: `/movie/${movie.id}`,
        });
      }}
      className="card"
      key={movie?.id}
    >
      {config?.poster_sizes ? (
        <img
          className={"card-img"}
          src={`${config?.base_url}${config?.poster_sizes[3]}${movie?.poster_path}`}
          alt=""
        />
      ) : null}
    </article>
  );
};

export default MovieCard;
