import React, { useState, useEffect } from "react";
import axios from "axios";
import Organisation from "./components/organisation";
import styled from "styled-components";

const App = () => {
  const [organisations, setOrganisations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:8080/organisations");
      setOrganisations(result.data);
    }
    fetchData();
  }, []);

  const listOfOrganisations = organisations.map(organisation => {
    return <Organisation organisation={organisation} />;
  });

  return <Organisations>{listOfOrganisations}</Organisations>;
};

const Organisations = styled.div`
  margin: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default App;
