import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Navigation from "./Navigation";
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
      <Navigation path={[["/", "Home"]]} title="Smurfs">
        <Link to="/new">New Smurf</Link>
      </Navigation>
      <ListContainer>
        {smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))}
      </ListContainer>
    </div>
  );
}

export default List;
