import React from "react";
import styled from "styled-components";

const Organisation = ({
  organisation: { name, yearFounded, revenue, _id },
  deleteOrganisation
}) => {
  return (
    <OrganisationBox>
      <h1>{name}</h1>
      <p>Founded: {yearFounded}</p>
      <p>Revenue: {revenue}</p>
      <button>
        <img src={require("./assets/edit.svg")} />
      </button>
      <button onClick={() => deleteOrganisation(_id)}>
        <img src={require("./assets/delete.svg")} />
      </button>
    </OrganisationBox>
  );
};

const OrganisationBox = styled.div`
  margin: 16px;
  border: 5px solid red;
`;

export default Organisation;
