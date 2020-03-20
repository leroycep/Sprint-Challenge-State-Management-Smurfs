import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

import { SmurfContext } from "../contexts/SmurfContext";
import List from "./List";
import "./App.css";

function App() {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => setSmurfs(res.data))
      .catch(res => console.log("Failed to fetch smurfs", smurfs));
  }, []);

  return (
    <SmurfContext.Provider value={{ smurfs }}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/">
            <h1>Route not found</h1>
            <Link to="/">Go to home page</Link>
          </Route>
        </Switch>
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
