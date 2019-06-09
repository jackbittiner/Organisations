import React, { useState, useEffect } from "react";
import axios from "axios";
import Organisation from "./components/organisation";
import styled from "styled-components";

const App = () => {
  const [organisations, setOrganisations] = useState([]);

  async function fetchData() {
    const result = await axios.get("http://localhost:8080/organisations");
    setOrganisations(result.data);
  }

  async function deleteOrganisation(organisationId) {
    await axios.delete(`http://localhost:8080/organisations/${organisationId}`);
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  const listOfOrganisations = organisations.map(organisation => {
    return (
      <Organisation
        organisation={organisation}
        deleteOrganisation={deleteOrganisation}
      />
    );
  });

  return (
    <div>
      <Organisations>{listOfOrganisations}</Organisations>
    </div>
  );
};

const Organisations = styled.div`
  margin: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default App;
