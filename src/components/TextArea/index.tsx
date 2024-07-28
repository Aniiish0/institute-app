import React from 'react';
import { Form } from 'react-bootstrap';

interface TextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, value, onChange, placeholder, rows = 3 }) => (
  <Form.Group controlId={`form${name}`}>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      as="textarea"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
    />
  </Form.Group>
);

export default TextArea;