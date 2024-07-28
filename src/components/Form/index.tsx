import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from './hooks';

type FieldType = 'text' | 'email' | 'textarea' | 'checkbox' | 'phone' | 'password';

export interface FieldConfig {
  label: string;
  name: string;
  type: FieldType;
  placeholder?: string;
}

interface GenericFormProps<T extends object> {
  initialValues: T;
  fields: FieldConfig[];
  onSubmit: (values: T) => void;
}

const GenericForm = <T extends object>({ initialValues, fields, onSubmit }: GenericFormProps<T>) => {
  const { formState, handleChange } = useForm(initialValues);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formState);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <Form.Group key={field.name} controlId={`form${field.name}`}>
          {field.type === 'textarea' ? (
            <>
              <Form.Label>{field.label}</Form.Label>
              <Form.Control
                as="textarea"
                name={field.name}
                value={(formState as never)[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
              />
            </>
          ) : field.type === 'checkbox' ? (
            <Form.Check
              type="checkbox"
              name={field.name}
              checked={(formState as never)[field.name]}
              onChange={handleChange}
              label={field.label}
            />
          ) : (
            <>
              <Form.Label>{field.label}</Form.Label>
              <Form.Control
                type={field.type}
                name={field.name}
                value={(formState as never)[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
              />
            </>
          )}
        </Form.Group>
      ))}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default GenericForm;