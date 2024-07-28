import React from 'react';
import { Form } from 'react-bootstrap';

interface TextInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, type, name, value, onChange, placeholder }) => (
  <Form.Group controlId={`form${name}`}>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </Form.Group>
);

export default TextInput;