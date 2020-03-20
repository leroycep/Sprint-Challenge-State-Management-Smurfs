import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { SmurfContext } from "../contexts/SmurfContext";

function SmurfForm(props) {
  const { handleSubmit, register } = useForm();

  return (
    <div>
      <h2>{props.title}</h2>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <input type="text" placeholder="Name" name="name" ref={register} />
        <input type="number" placeholder="Age" name="age" ref={register} />
        <input type="text" placeholder="Height" name="height" ref={register} />
        {props.children}
      </form>
    </div>
  );
}

export default SmurfForm;
