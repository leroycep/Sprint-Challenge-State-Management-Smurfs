import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import Navigation from "./Navigation";
import SmurfForm from "./SmurfForm";
import { SmurfContext } from "../contexts/SmurfContext";

function NewSmurf() {
  const { postSmurf } = useContext(SmurfContext);
  const history = useHistory();

  const onSubmit = values => {
    history.push("/");
    postSmurf(values);
  };

  return (
    <div>
      <Navigation
        path={[
          ["/", "Home"],
          [null, "New"]
        ]}
        title="New Smurf"
      />
      <SmurfForm onSubmit={onSubmit}>
        <button type="submit">Submit</button>
      </SmurfForm>
    </div>
  );
}

export default NewSmurf;
