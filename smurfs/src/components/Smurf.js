import React from "react";
import { Link } from "react-router-dom";

function Smurf(props) {
  return (
    <div>
      <h3>{props.smurf.name}</h3>
      <ul>
        <li>Age: {props.smurf.age}</li>
        <li>Height: {props.smurf.height}</li>
      </ul>
      <Link to={`/edit/${props.smurf.id}`}>edit</Link>
    </div>
  );
}

export default Smurf;
