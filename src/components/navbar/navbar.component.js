import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {getMovieGenres} from "../../services/movies.service.ts";
import "./navbar.component.styles.scss";

const Navbar = () => {
    const history = useHistory();
    const movieTotal = useSelector(state => state.total);

    const [searchString, setSearchString] = useState("");


    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/" replace>
                    <b>TNEMA</b>
                </Link>
                <div className="collapse navbar-collapse justify-content-around" id="navbarTogglerDemo03">
                    <form
                        onSubmit={() => {
                            history.push({
                                pathname: "/search",
                                search: `?search=${searchString}`,
                            });
                        }}
                        className="d-flex navbar-search"
                    >
                        <input
                            className="form-control ms-2 col-md-6"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={(e) => setSearchString(e.target.value)}
                        />
                        <Link to={`/search?search=${searchString}`} replace>
                            <button
                                onClick={() => {
                                    history.push({
                                        pathname: "/search",
                                        search: `?search=${searchString}`,
                                    });
                                }}
                                className="btn btn-outline-secondary"
                                type="submit"
                            >
                                Search
                            </button>
                        </Link>
                    </form>
                </div>
                <Link to={'/watchlist'} replace>
                    <button
                        className="btn btn-outline-secondary ms-4"
                        type="button"
                    >
                        <i className="fas fa-clipboard-list"></i>
                    </button>
                </Link>
            </div>
        </nav>
    );
};
export default Navbar;
