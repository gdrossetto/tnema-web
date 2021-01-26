import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./navbar.component.styles.scss";

const Navbar = () => {
  const [searchString, setSearchString] = useState("");
  const history = useHistory();

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
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <form
            onSubmit={() => {
              history.push({
                pathname: "/search",
                search: `?search=${searchString}`,
              });
            }}
            className="d-flex ms-auto navbar-search"
          >
            <input
              className="form-control me-2"
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
      </div>
    </nav>
  );
};
export default Navbar;
