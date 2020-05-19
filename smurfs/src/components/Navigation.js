import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
`;

const Crumb = styled.span`
  &:before {
    content: " / ";
  }

  a {
    text-decoration: none;
  }
`;

function Navigation(props) {
  const links = props.path.map(([link, text]) =>
    link !== null ? (
      <Crumb>
        <Link to={link}>{text}</Link>
      </Crumb>
    ) : (
      <Crumb>{text}</Crumb>
    )
  );
  return (
    <Bar>
      <div>{links}</div>
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </Bar>
  );
}

export default Navigation;
