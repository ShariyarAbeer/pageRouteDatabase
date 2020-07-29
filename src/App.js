import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Carlist from "./page/carList";
import Home from "./page/home";
import {
  Route,
  Link,
  BrowserRouter as Router,
} from "../node_modules/react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/carlist">Car List</Link>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/carlist" component={Carlist} />
        </div>
      </Router>
    </div>
  );
}

export default App;
