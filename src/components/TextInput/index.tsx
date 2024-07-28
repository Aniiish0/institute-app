import React from 'react';
import { Form } from 'react-bootstrap';

interface TextInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  required?: boolean; // Add required prop to make input required by default. Default value is false.
}

const TextInput: React.FC<TextInputProps> = ({ label, type, name, value, onChange, placeholder, required = false }) => (
  <Form.Group controlId={`form${name}`}>
    <Form.Label>{label}{required && <span>*</span>}</Form.Label>
    <Form.Control
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className='form-control-lg rounded-0 border-black border-2'
    />
  </Form.Group>
);

export default TextInput;