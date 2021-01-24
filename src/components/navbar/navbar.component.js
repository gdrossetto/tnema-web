import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./navbar.component.styles.scss";

const Navbar = () => {
  const [searchString, setSearchString] = useState("");
  const history = useHistory();

  return (
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <Link to="/" replace>
          <a class="navbar-brand" href="#">
            <b>TNEMA</b>
          </a>
        </Link>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <form
            onSubmit={() => {
              history.push({
                pathname: "/search",
                search: `?search=${searchString}`,
              });
            }}
            class="d-flex ml-auto"
          >
            <input
              class="form-control me-2"
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
                class="btn btn-outline-secondary"
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
