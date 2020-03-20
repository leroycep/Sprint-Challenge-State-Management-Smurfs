import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

import { SmurfContext } from "../contexts/SmurfContext";
import NewSmurf from "./NewSmurf";
import List from "./List";
import "./App.css";
import { STATUS_IDLE, STATUS_LOADING, STATUS_ERROR } from "../constants";

function App() {
  const [smurfs, setSmurfs] = useState([]);
  const [status, setStatus] = useState({ state: STATUS_IDLE });

  const fetchSmurfs = () => {
    setStatus({ state: STATUS_LOADING });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        setSmurfs(res.data);
        setStatus({ state: STATUS_IDLE });
      })
      .catch(res => {
        console.log("Failed to fetch smurfs", res);
        setStatus({ state: STATUS_ERROR, error: res.message });
      });
  };

  const postSmurf = smurf => {
    setStatus({ state: STATUS_LOADING });
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        setSmurfs(res.data);
        setStatus({ state: STATUS_IDLE });
      })
      .catch(res => {
        console.log("Failed to post smurf", res);
        setStatus({ state: STATUS_ERROR, error: res.message });
      });
  };

  useEffect(() => {
    fetchSmurfs();
  }, []);

  return (
    <SmurfContext.Provider value={{ smurfs, fetchSmurfs, postSmurf }}>
      <div className="App">
        {status.state === STATUS_LOADING && <p>Loading...</p>}
        {status.state === STATUS_ERROR && <p>Error: {status.error}</p>}
        <Switch>
          {/* Create a new smurf */}
          <Route exact path="/new" component={NewSmurf} />

          {/* Edit existing smurf */}
          <Route exact path="/edit/:id">
            Editing is a WIP
            <Link to="/">Go to home page</Link>
          </Route>

          {/* Home page / list of smurfs */}
          <Route exact path="/" component={List} />

          {/* What shows up when the route is unknown */}
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
