import React from "react";
import styled from "styled-components";

const Organisation = ({
  organisation: { name, yearFounded, revenue, _id },
  deleteOrganisation,
  handleUpdateButtonClick
}) => {
  return (
    <OrganisationBox>
      <Content>
        <h1>{name}</h1>
        <p>
          <Value>Founding Year:</Value> {yearFounded}
        </p>
        <p>
          <Value>Revenue:</Value> {revenue}
        </p>
        <button onClick={handleUpdateButtonClick}>
          <img src={require("./assets/edit.svg")} />
        </button>
        <button onClick={() => deleteOrganisation(_id)}>
          <img src={require("./assets/delete.svg")} />
        </button>
      </Content>
    </OrganisationBox>
  );
};

const OrganisationBox = styled.div`
  margin: 16px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  margin-left: 20px;
`;

const Value = styled.span`
  font-weight: 700;
`;

export default Organisation;
