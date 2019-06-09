import React from "react";
import styled from "styled-components";

const Organisation = ({ organisation: { name, yearFounded, revenue } }) => {
  return (
    <OrganisationBox>
      <h1>{name}</h1>
      <p>{yearFounded}</p>
      <p>{revenue}</p>
    </OrganisationBox>
  );
};

const OrganisationBox = styled.div`
  margin: 16px;
  border: 5px solid red;
`;

export default Organisation;
