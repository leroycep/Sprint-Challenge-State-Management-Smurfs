import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { SmurfContext } from "../contexts/SmurfContext";

const Form = styled.form`
  display: grid;
  grid-template-areas:
    "labelname name"
    "labelage age"
    "labelheight height"
    "x buttons";
  grid-template-columns: auto 1fr;
  grid-gap: 5px;
  padding: 0 5%;
  max-width: 1000px;
  margin: 0 auto;
`;

const Label = props => {
  const Elem = styled.label`
    grid-area: label ${props.for};
  `;
  return <Elem {...props}>{props.children}</Elem>;
};

const Input = props => {
  const Elem = styled.input`
    grid-area: ${props.name};
  `;
  return <Elem {...props}>{props.children}</Elem>;
};

const Buttons = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: flex-end;
`;

function SmurfForm(props) {
  const { handleSubmit, register } = useForm({
    defaultValues: props.defaultValues
  });

  return (
    <div>
      <h2>{props.title}</h2>
      <Form onSubmit={handleSubmit(props.onSubmit)}>
        <Label for="name">Name: </Label>
        <Input type="text" placeholder="Name" name="name" ref={register} />

        <Label for="age">Age: </Label>
        <Input type="number" placeholder="Age" name="age" ref={register} />

        <Label for="height">Height: </Label>
        <Input type="text" placeholder="Height" name="height" ref={register} />

        <Buttons>{props.children}</Buttons>
      </Form>
    </div>
  );
}

export default SmurfForm;
