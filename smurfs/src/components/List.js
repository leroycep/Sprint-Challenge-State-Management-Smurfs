import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Smurf from "./Smurf";
import { SmurfContext } from "../contexts/SmurfContext";

function List() {
  const { smurfs } = useContext(SmurfContext);

  return (
    <div>
      <h2>Smurfs</h2>
      <Link to="/new">New Smurf</Link>
      {smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
}

export default List;
