import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as yup from "yup";

const OrganisationForm = ({ handleSubmit, toggleShowModal }) => {
  return (
    <Modal>
      <ModalContent>
        <h1>Add Organisation Details</h1>
        <Formik
          initialValues={{ companyName: "", yearFounded: "", revenue: "" }}
          onSubmit={(values, actions) => {
            handleSubmit(values);
            toggleShowModal();
            actions.setSubmitting(false);
          }}
          validationSchema={validator()}
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
                {props.errors.companyName && (
                  <div id="feedback">Required field</div>
                )}
              </div>
              <div>
                <input
                  type="text"
                  onChange={props.handleChange}
                  value={props.values.yearFounded}
                  name="yearFounded"
                  placeholder="Year Founded"
                />
                {props.errors.yearFounded && (
                  <div id="feedback">Required field and must be number</div>
                )}
              </div>
              <div>
                <input
                  type="text"
                  onChange={props.handleChange}
                  value={props.values.revenue}
                  name="revenue"
                  placeholder="Revenue"
                />
                {props.errors.revenue && (
                  <div id="feedback">Required field and must be number</div>
                )}
              </div>
              <button type="submit">Submit</button>
            </StyledForm>
          )}
        />
      </ModalContent>
    </Modal>
  );
};

const validator = () => {
  const validationObjectShape = {
    companyName: yup.string().required(),
    yearFounded: yup.number().required(),
    revenue: yup.number().required()
  };

  const validationSchema = yup.object().shape(validationObjectShape);

  return validationSchema;
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
