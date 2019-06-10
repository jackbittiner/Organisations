import React from "react";
import styled from "styled-components";

const Header = () => (
  <HeaderText>
    <h2>Financial Times Tech Test</h2>
  </HeaderText>
);

const HeaderText = styled.div`
  background-color: #15223b;
  width: 100%;
  margin: 0;
  padding: 10px;
  color: white;

  h2 {
    margin: 0;
    padding: 0;
  }
`;

export default Header;
