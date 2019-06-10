import React, { useState } from "react";
import styled from "styled-components";

const NewOrganisationButton = ({ toggleButton }) => {
  return (
    <Button onClick={toggleButton}>
      <Plus>+</Plus>
    </Button>
  );
};

const Button = styled.button`
  width: 60px;
  height: 60px;
  background-color: #000dff;
  border-radius: 50%;
  border: none;
  float: right;
  margin: 16px;

  &:hover {
    background-color: #2228a3;
  }
`;

const Plus = styled.h1`
  font-size: 25px;
  color: white;
`;

export default NewOrganisationButton;
