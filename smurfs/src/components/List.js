import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Smurf from "./Smurf";
import { SmurfContext } from "../contexts/SmurfContext";

const ListContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

function List() {
  const { smurfs } = useContext(SmurfContext);

  return (
    <div>
      <h2>Smurfs</h2>
      <Link to="/new">New Smurf</Link>
      <ListContainer>
        {smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))}
      </ListContainer>
    </div>
  );
}

export default List;
