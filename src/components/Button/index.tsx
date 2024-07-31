import React from 'react';
import { Button } from 'react-bootstrap';
import { SubmitButtonProps } from './types';

const SubmitButton: React.FC<SubmitButtonProps> = ({ label = "Submit", type = "submit" }) => (
  <Button variant="primary" type={type} className='btn-lg rounded-0'>
    {label}
  </Button>
);

export default SubmitButton;