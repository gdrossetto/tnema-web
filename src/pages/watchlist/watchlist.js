import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../components/movie-card/movie-card.component";

const WatchList = () => {
    const movieList = useSelector((state) => state.watchList);
    const config = useSelector(state => state.config);

    return (
        <main className="pt-4">
            <h1>Watchlist</h1>
            <div className="item-list">
                {movieList.map((movie, index) => {
                    return <MovieCard key={movie.id} movie={movie} config={config}/>;
                })}
                <div className="invisible"></div>
                <div className="invisible"></div>
            </div>
        </main>
    );
};
export default WatchList;
