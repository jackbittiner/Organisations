import React, { useState, useEffect } from "react";
import axios from "axios";
import Organisation from "./components/organisation";
import NewOrganisationButton from "./components/new-organisation-button";
import OrganisationForm from "./components/organisation-form";
import styled from "styled-components";

const App = () => {
  const [organisations, setOrganisations] = useState([]);
  const [modal, toggleShowModal] = useState({
    show: false,
    type: null,
    organisationId: null
  });

  async function fetchData() {
    const result = await axios.get("http://localhost:8080/organisations");
    setOrganisations(result.data);
  }

  async function deleteOrganisation(organisationId) {
    await axios.delete(`http://localhost:8080/organisations/${organisationId}`);
    fetchData();
  }

  async function createOrganisation({ yearFounded, revenue, companyName }) {
    await axios.post(`http://localhost:8080/organisations`, {
      name: companyName,
      yearFounded: yearFounded,
      revenue: revenue
    });
    fetchData();
  }

  async function updateOrganisation(requestBody, organisationId) {
    await axios.put(
      `http://localhost:8080/organisations/${organisationId}`,
      requestBody
    );
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
        handleUpdateButtonClick={() =>
          toggleShowModal({
            show: true,
            type: "UpdateOrganisation",
            organisationId: organisation._id
          })
        }
      />
    );
  });

  return (
    <div>
      <NewOrganisationButton
        toggleButton={() =>
          toggleShowModal({
            show: true,
            type: "NewOrganisation",
            organisationId: null
          })
        }
      />
      <Organisations>{listOfOrganisations}</Organisations>
      {modal.show && (
        <OrganisationForm
          handleCreateSubmit={createOrganisation}
          toggleShowModal={() =>
            toggleShowModal({ show: false, type: null, organisationId: null })
          }
          modalType={modal.type}
          updateOrganisation={updateOrganisation}
          organisationId={modal.organisationId}
        />
      )}
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
