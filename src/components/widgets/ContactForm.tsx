import React from 'react';
import { Container } from 'react-bootstrap';
import Form from '../Form';
import { FieldConfig } from '../Form/types';

interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  message: string;
  acceptTerms: boolean;
}

const ContactForm: React.FC = () => {
  const initialValues: ContactFormState = {
    name: '',
    phone: '',
    email: '',
    message: '',
    acceptTerms: false,
  };

  const fields: FieldConfig[] = [
    { label: 'Name', name: 'name', type: 'text', placeholder: 'Enter your name', required: true, validateRegExp: /^.{1,}$/, validationError: "Need at least one character" },
    { label: 'Phone', name: 'phone', type: 'tel', placeholder: 'Enter your phone number', required: true, validationError: "Invalid phone number" },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email', validationError: "Invalid email address" },
    { label: 'Message', name: 'message', type: 'textarea', placeholder: 'Type your message', required: true, validateRegExp: /^.{5,}$/, validationError: "Need to be atleast 5 characters long" },
    { label: 'I accept the terms', name: 'acceptTerms', type: 'checkbox', required: true },
  ];

  const handleSubmit = (values: ContactFormState) => {
    console.log('Form data:', values);
    // Additional form submission logic
  };

  return (
    <Container>
      <h1>Contact us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wekf qbekbd adhfikbbbd</p>
      <Form
        initialValues={initialValues}
        fields={fields}
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

export default ContactForm;