import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Form, type FieldConfig, MapView } from "@proto-xyz/ui-components";
import { MAP_API_KEY } from "../constants";

interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  message: string;
  acceptTerms: boolean;
}

const ContactForm: React.FC = () => {
  const initialValues: ContactFormState = {
    name: "",
    phone: "",
    email: "",
    message: "",
    acceptTerms: false,
  };

  const fields: FieldConfig[] = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Enter your name",
      required: true,
      validateRegExp: /^.{1,}$/,
      validationError: "Need at least one character",
    },
    {
      label: "Phone",
      name: "phone",
      type: "tel",
      placeholder: "Enter your phone number",
      required: true,
      validationError: "Invalid phone number",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      validationError: "Invalid email address",
    },
    {
      label: "Message",
      name: "message",
      type: "textarea",
      placeholder: "Type your message",
      required: true,
      validateRegExp: /^.{5,}$/,
      validationError: "Need to be atleast 5 characters long",
    },
    { label: "Contact me", name: "acceptTerms", type: "checkbox" },
  ];

  const handleSubmit = (values: ContactFormState) => {
    console.log("Form data:", values);
    // Additional form submission logic
  };

  return (
    <Container>
      <h1 className="custom-h1">Contact us</h1>
      <br />
      <Row xs={1} sm={1} md={1} lg={2} className="g-4">
        <Col>
          <p>Please fill free to reach out to us regarding any queries.</p>
          <Form
            initialValues={initialValues}
            fields={fields}
            onSubmit={handleSubmit}
          />
        </Col>
        <Col>
          <MapView searchText="KV Bargarh, Odisha" apiKey={MAP_API_KEY} />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
