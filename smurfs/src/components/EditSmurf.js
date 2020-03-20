import React, { useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import Navigation from "./Navigation";
import SmurfForm from "./SmurfForm";
import { SmurfContext } from "../contexts/SmurfContext";

function EditSmurf() {
  const { smurfs, putSmurf, deleteSmurf } = useContext(SmurfContext);
  const history = useHistory();
  const { id } = useParams();

  const smurf = smurfs.find(s => s.id == id);

  if (smurf === undefined) {
    return (
      <div>
        <p>No smurf with that id found.</p>
        <Link to="/">Go to home page</Link>
      </div>
    );
  }

  const onSubmit = values => {
    history.push("/");
    putSmurf(id, values);
  };

  const handleDelete = () => {
    deleteSmurf(id);
    history.push("/");
  };

  return (
    <div>
    <Navigation path={[['/', "Home"], [null, "Edit"]]} title="Edit Smurf"/>
      <SmurfForm defaultValues={smurf} onSubmit={onSubmit}>
        <button type="submit">Save</button>
        <button type="button" onClick={handleDelete}>Delete</button>
      </SmurfForm>
    </div>
  );
}

export default EditSmurf;
