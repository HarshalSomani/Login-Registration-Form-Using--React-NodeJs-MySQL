import React from 'react';
import FormField from './FormField';

const Form = ({ formData, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <FormField
        label="Name:"
        type="text"
        name="name"
        value={formData.name}
        onChange={onInputChange}
        required
      />
      <FormField
        label="Password:"
        type="password"
        name="password"
        value={formData.password}
        onChange={onInputChange}
        required
      />
      <FormField
        label="Email:"
        type="email"
        name="email"
        value={formData.email}
        onChange={onInputChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;