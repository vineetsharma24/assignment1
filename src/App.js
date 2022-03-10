import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Cards from "./Cards";
import Player from "./Player";

function App() {
  return (
    <Router>
      <Link to="/cards">Go to cards</Link>

      <Switch>
        <Route path="/player">
          <Player />
        </Route>
        <Route path="/cards">
          <Cards />
        </Route>
        <Route path="/">
          <h1>hello</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
