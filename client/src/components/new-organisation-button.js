import React, { useState } from "react";
import styled from "styled-components";

const NewOrganisationButton = ({ toggleButton }) => {
  return (
    <Button onClick={toggleButton}>
      <h1>+</h1>
    </Button>
  );
};

const Button = styled.button`
  width: 100px;
  height: 100px;
  background-color: green;
  border-radius: 50%;
  border: none;
  float: right;
  margin: 16px;

  &:hover {
    background-color: red;
  }
`;

export default NewOrganisationButton;
