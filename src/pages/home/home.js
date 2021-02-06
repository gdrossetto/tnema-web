import "./home.styles.scss";
import React, {useEffect, useState} from "react";
import {
    getConfig,
    getMovies,
    getMovieVideos,
} from "../../services/movies.service.ts";
import MovieCard from "../../components/movie-card/movie-card.component";
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
    const [featured, setFeatured] = useState([]);
    const dispatch = useDispatch();
    const config = useSelector(state => state.config);

    async function getFeaturedMovies() {
        let movies = await getMovies();
        setFeatured(movies?.results);
    }


    useEffect(() => {
        console.log(config)
        getFeaturedMovies();
    }, [config]);

    return (
        <main className="pt-4">
            <h1>Featured Movies</h1>
            <div className="item-list">
                {featured.map((movie, index) => {
                    return <MovieCard key={movie?.id} movie={movie} config={config}/>;
                })}
                <div className="invisible"></div>
                <div className="invisible"></div>
            </div>
        </main>
    );
};

export default Home;
