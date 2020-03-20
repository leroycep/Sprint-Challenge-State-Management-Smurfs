import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { SmurfContext } from "../contexts/SmurfContext";

function NewSmurf() {
  const history = useHistory();
  const { fetchSmurfs, postSmurf } = useContext(SmurfContext);
  const { handleSubmit, register } = useForm();

  const onSubmit = values => {
    console.log(values);
    history.push("/");
    postSmurf(values);
  };

  return (
    <div>
      <h2>New Smurf</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" name="name" ref={register} />
        <input type="number" placeholder="Age" name="age" ref={register} />
        <input type="text" placeholder="Height" name="height" ref={register} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewSmurf;
