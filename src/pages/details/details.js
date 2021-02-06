import "./details.styles.scss";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getMovieById, getMovieVideos} from "../../services/movies.service.ts";
import {useDispatch, useSelector} from "react-redux";

const Details = () => {
    let {id} = useParams();
    const dispatch = useDispatch();
    const config = useSelector((state) => state.config);

    const [movie, setMovie] = useState({});
    const [trailer, setTrailer] = useState();

    async function getMovie() {
        let movieDetails = await getMovieById(id);
        setMovie(movieDetails);
    }

    async function getVideos() {
        let movieVideos = await getMovieVideos(id);
        if (movieVideos.length) {
            setTrailer(movieVideos[0].key);
        }
    }

    function addMovieToWatchList(movie) {
        dispatch({type: 'ADD_MOVIE_WATCHLIST', movie: movie});
    }

    useEffect(() => {
        getMovie();
    }, [config]);

    useEffect(() => {
        getVideos();
    }, [id])

    return (
        <main>
            {movie?.backdrop_path ? (
                <img
                    className={"details-backdrop"}
                    src={`${config?.base_url}original${movie?.backdrop_path}`}
                    alt=""
                />
            ) : null}
            <div className="details-desc">
                <h1 className="details-desc__title">
                    {movie?.original_title} {movie.release_date ? `(${movie?.release_date?.split("-")[0]})` : null}
                </h1>
                <button onClick={() => addMovieToWatchList(movie)}
                        className="btn btn-add-watchlist m-auto d-block mt-4">Add to Watchlist
                </button>
            </div>
            <div className="details-content mt-5">
                <div className="d-md-flex flex-row">
                    {movie?.poster_path ? (
                        <img
                            className={"details-content__poster"}
                            src={`${config?.base_url}original${movie?.poster_path}`}
                            alt=""
                        />
                    ) : null}

                    <div className="details-content__video">
                        {trailer ?
                            <iframe src={`https://www.youtube.com/embed/${trailer}`}></iframe>
                            : null}
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
