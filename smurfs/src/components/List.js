import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { SmurfContext } from "../contexts/SmurfContext";

function List() {
  const { smurfs } = useContext(SmurfContext);

  return (
    <div>
      <h2>Smurfs</h2>
      <Link to="/new">New Smurf</Link>
      {smurfs.map(smurf => (
        <pre>{JSON.stringify(smurf)}</pre>
      ))}
    </div>
  );
}

export default List;
