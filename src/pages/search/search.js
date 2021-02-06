import "./search.styles.scss";
import React, {useEffect, useState} from "react";
import {
    getConfig,
    getMovieGenres,
    getMovies,
    searchMovies,
} from "../../services/movies.service.ts";
import {useHistory, useLocation} from "react-router-dom";
import MovieCard from "../../components/movie-card/movie-card.component";
import {useDispatch, useSelector} from "react-redux";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Search = () => {
    const [featured, setFeatured] = useState([]);
    const [searchString, setSearchString] = useState("");
    const [generos, setGeneros] = useState([]);

    const dispatch = useDispatch();
    const config = useSelector(state => state.config);
    const history = useHistory();
    const query = useQuery();

    async function getMovieGenreList() {
        let genres = await getMovieGenres();
        setGeneros(genres);
    }

    useEffect(() => {
        getMovieGenreList();
    }, []);

    async function getFeaturedMovies(searchQuery) {
        let movies = await searchMovies(searchQuery);
        setFeatured(movies?.results);
    }


    useEffect(() => {
        setSearchString(query.get("search"));
    }, []);

    useEffect(() => {
        getFeaturedMovies(query.get("search"));
    }, [config]);

    useEffect(() => {
        getFeaturedMovies(query.get("search"));
    }, [query.get("search")]);

    return (
        <main className="pt-5">
            <div className="col-md-6 m-auto mb-5">
                <h1 className="mb-5">What are you looking for?</h1>
                <form className="p-4">
                    <div className={"row"}>
                        <div className="form-group col-md-3">
                            <select className={'form-select'}>
                                <option>All</option>
                                {generos.map((genero) => {
                                    return <option key={genero.id}>{genero?.name}</option>;
                                })}
                            </select>
                        </div>
                        <div className={"d-flex flex-row col-md-9"}>
                            <input
                                type="text"
                                className="form-control"
                                id="searchString"
                                value={searchString}
                                aria-describedby="search"
                                onChange={(e) => setSearchString(e.target.value)}
                            />
                            <button
                                onClick={() => {
                                    history.push({
                                        pathname: "/search",
                                        search: `?search=${searchString}`,
                                    });
                                }}
                                className="btn btn-secondary"
                                type="button"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <h1>Search Results</h1>

            <div className="item-list">
                {featured?.length > 0 ? (
                    featured?.map((movie, index) => {
                        return <MovieCard movie={movie} config={config}/>;
                    })
                ) : (
                    <b className="">No Results</b>
                )}
                <div className="invisible"></div>
                <div className="invisible"></div>
            </div>
        </main>
    );
};

export default Search;
