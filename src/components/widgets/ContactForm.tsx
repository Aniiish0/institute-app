import React from 'react';
import { Container } from 'react-bootstrap';
import Form, {FieldConfig} from '../Form';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
  acceptTerms: boolean;
}

const ContactForm: React.FC = () => {
  const initialValues: ContactFormState = {
    name: '',
    email: '',
    message: '',
    acceptTerms: false,
  };

  const fields: FieldConfig[] = [
    { label: 'Name', name: 'name', type: 'text', placeholder: 'Enter your name' },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email' },
    { label: 'Message', name: 'message', type: 'textarea', placeholder: 'Type your message' },
    { label: 'I accept the Terms', name: 'acceptTerms', type: 'checkbox' },
  ];

  const handleSubmit = (values: ContactFormState) => {
    console.log('Form data:', values);
    // Additional form submission logic
  };

  return (
    <Container>
      <h1>Contact us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Form
        initialValues={initialValues}
        fields={fields}
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

export default ContactForm;