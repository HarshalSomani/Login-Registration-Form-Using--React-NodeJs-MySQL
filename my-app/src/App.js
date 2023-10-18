import React, { useState } from 'react';
import Form from './component/Form';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await axios.post('http://localhost:3000/api/user', formData);
      alert('Data submitted successfully!');
      // Clear the form after successful submission
      setFormData({ name: '', password: '', email: '' });
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Error submitting data. Please try again later.');
    }
  };

  return (
    <div className="App">
      <h1>User Registration Form</h1>
      <Form formData={formData} onInputChange={handleInputChange} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;