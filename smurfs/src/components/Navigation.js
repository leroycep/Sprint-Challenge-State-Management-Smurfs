import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
`;

function Navigation(props) {
  const links = props.path.map(([link, text]) => <Link to={link}>{text}</Link>);
  return (
    <Bar>
      <div>{links}</div>
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </Bar>
  );
}

export default Navigation;
