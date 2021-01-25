import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/home";
import Navbar from "./components/navbar/navbar.component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./pages/search/search";
import { createBrowserHistory } from "history";
import Details from "./pages/details/details";

const history = createBrowserHistory();

function App() {
  return (
    <div className="app-container">
      <Router history={history}>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/movie/:id" component={Details}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
