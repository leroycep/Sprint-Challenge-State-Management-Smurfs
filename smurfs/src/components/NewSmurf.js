import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

function NewSmurf() {
  const history = useHistory();
  const { handleSubmit, register } = useForm();

  const onSubmit = values => {
    console.log(values);
    history.push("/");
  };

  return (
    <div>
      <h2>New Smurf</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" ref={register} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewSmurf;
