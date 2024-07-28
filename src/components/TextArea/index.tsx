import React from 'react';
import { Form } from 'react-bootstrap';

interface TextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  rows?: number;
  required?: boolean; // Add required prop to make textarea required by default. Default value is false.
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, value, onChange, placeholder, required = false, rows = 5 }) => (
  <Form.Group controlId={`form${name}`}>
    <Form.Label>{label}{required && <span>*</span>}</Form.Label>
    <Form.Control
      as="textarea"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      required={required}
      className='form-control-lg rounded-0 border-black border-2'
    />
  </Form.Group>
);

export default TextArea;