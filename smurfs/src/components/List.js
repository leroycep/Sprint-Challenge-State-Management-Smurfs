import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { SmurfContext } from "../contexts/SmurfContext";

function List() {
  const { smurfs } = useContext(SmurfContext);
  return (
    <div>
      <h2>Smurfs</h2>
      {smurfs.map(smurf => (
        <pre>{JSON.stringify(smurf)}</pre>
      ))}
    </div>
  );
}

export default List;
