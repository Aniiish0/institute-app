import React from 'react';
import { Button } from 'react-bootstrap';

interface SubmitButtonProps {
  label?: string;
  type?: 'submit' | 'button' | 'reset'; // Default value is 'submit'. Add type prop to change button type.
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label = "Submit", type = "submit" }) => (
  <Button variant="primary" type={type} className='btn-lg rounded-0'>
    {label}
  </Button>
);

export default SubmitButton;