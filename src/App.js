import "./App.css";
import Home from "./pages/home/home";
import Navbar from "./components/navbar/navbar.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/search/search";
import { createBrowserHistory } from "history";
import Details from "./pages/details/details";
import WatchList from "./pages/watchlist/watchlist";
import { useEffect } from "react";
import {getConfig} from "./services/movies.service.ts";
import {useDispatch} from "react-redux";

const history = createBrowserHistory();

function App() {

  const dispatch = useDispatch();

  async function getMovieDbConfig() {
    let configuration = await getConfig();
    dispatch({type: 'SET_CONFIG', config: configuration.images,});
  }

  useEffect(()=>{
    getMovieDbConfig();
  },[])

  return (
    <div className="app-container">
      <Router history={history}>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/movie/:id" component={Details}></Route>
          <Route path="/watchlist" component={WatchList}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
