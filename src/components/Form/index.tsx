import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from './hooks';
import TextArea from '../TextArea';
import TextInput from '../TextInput';
import Checkbox from '../CheckBox';
import Button from '../Button';

type FieldType = 'text' | 'email' | 'textarea' | 'checkbox' | 'tel' | 'password';

export interface FieldConfig {
  label: string;
  name: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
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
    <Form onSubmit={handleSubmit} className='text-start'>
      {fields.map((field) => (
        <div key={field.label} className='pb-3 rounded-0'>
          {field.type === 'textarea' ? (
            <TextArea
              label={field.label}
              name={field.name}
              value={(formState as never)[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
            />
          ) : field.type === 'checkbox' ? (
            <Checkbox
              name={field.name}
              checked={(formState as never)[field.name]}
              onChange={handleChange}
              label={field.label}
              required={field.required}
            />
          ) : (
            <TextInput
              label={field.label}
              type={field.type}
              name={field.name}
              value={(formState as never)[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
            />
          )}
        </div>
      ))}
      <Button label='Submit'/>
    </Form>
  );
};

export default GenericForm;