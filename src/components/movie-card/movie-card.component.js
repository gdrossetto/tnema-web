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
      className="mb-8 shadow-xl p-4 hover:bg-green-300"
      key={movie?.id}
    >
      <img
        className={"w-1/4"}
        src={`${config?.base_url}${config?.poster_sizes[3]}${movie?.poster_path}`}
        alt=""
      />
    </article>
  );
};

export default MovieCard;
