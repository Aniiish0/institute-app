import React from 'react';
import { Form } from 'react-bootstrap';

interface CheckboxProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean; // Add required prop to make checkbox required by default. Default value is false.
}

const Checkbox: React.FC<CheckboxProps> = ({ label, name, checked, onChange, required = false }) => (
  <Form.Group controlId={`form${name}`}>
    <Form.Check
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      label={label + (required ? '*': '')}
      required={required}
      className='border-black border-2'
    />
  </Form.Group>
);

export default Checkbox;