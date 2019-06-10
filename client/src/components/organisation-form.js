import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import { createValidator, updateValidator } from "./validation-schemas";

const OrganisationForm = ({
  handleCreateSubmit,
  toggleShowModal,
  modalType,
  updateOrganisation,
  organisationId
}) => {
  const createRequestBody = ({ companyName, yearFounded, revenue }) => {
    const requestBody = {};
    if (companyName !== "") requestBody.name = companyName;
    if (yearFounded !== "") requestBody.yearFounded = yearFounded;
    if (revenue !== "") requestBody.revenue = revenue;
    return requestBody;
  };

  return (
    <Modal>
      <ModalContent>
        <h1>
          {modalType === "NewOrganisation"
            ? "Add Organisation Details"
            : "Update Organisation Details"}
        </h1>
        <Formik
          initialValues={{ companyName: "", yearFounded: "", revenue: "" }}
          onSubmit={(values, actions) => {
            modalType === "NewOrganisation" && handleCreateSubmit(values);
            modalType === "UpdateOrganisation" &&
              updateOrganisation(createRequestBody(values), organisationId);
            toggleShowModal();
            actions.setSubmitting(false);
          }}
          validationSchema={
            modalType === "NewOrganisation"
              ? createValidator()
              : updateValidator()
          }
          render={props => (
            <StyledForm onSubmit={props.handleSubmit}>
              <div>
                <input
                  type="text"
                  onChange={props.handleChange}
                  value={props.values.companyName}
                  name="companyName"
                  placeholder="Company Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  onChange={props.handleChange}
                  value={props.values.yearFounded}
                  name="yearFounded"
                  placeholder="Year Founded"
                />
              </div>
              <div>
                <input
                  type="text"
                  onChange={props.handleChange}
                  value={props.values.revenue}
                  name="revenue"
                  placeholder="Revenue"
                />
              </div>
              <button type="submit">Submit</button>
            </StyledForm>
          )}
        />
      </ModalContent>
    </Modal>
  );
};

export default OrganisationForm;

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

const StyledForm = styled.form`
  display: grid;
`;
