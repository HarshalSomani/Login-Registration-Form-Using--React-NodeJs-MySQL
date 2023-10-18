import React from 'react';

const FormField = ({ label, type, name, value, onChange, required }) => {
  return (
    <label>
      {label}
      <input type={type} name={name} value={value} onChange={onChange} required={required} />
    </label>
  );
};

export default FormField;