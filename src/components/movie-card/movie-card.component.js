import "./movie-card.component.styles.scss";
import React, { useEffect, useState } from "react";

const MovieCard = ({ movie, config }) => {
  return (
    <article className="mb-8 shadow-xl p-4 hover:bg-green-300" key={movie?.id}>
      <img
        className={"w-1/4"}
        src={`${config?.base_url}${config?.poster_sizes[3]}${movie?.poster_path}`}
        alt=""
      />
    </article>
  );
};

export default MovieCard;
