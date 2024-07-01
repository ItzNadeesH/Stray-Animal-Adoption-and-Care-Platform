import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from '../../images/add.jpeg'; 

const Input = ({ id, name, type, value, className = "", disabled = false, placeholder, onChange }) => {
  return (
    <input id={id} type={type} name={name} value={value} disabled={disabled} className={`block w-full mt-2 px-3 py-2 text-gray-600 rounded-[4px] border-2 border-gray-100 ${disabled ? "bg-gray-50" : ""}  focus:border-primary transition outline-none hover:border-gray-300 ${className}`} placeholder={placeholder} onChange={onChange} />
  )
}

const Textarea = ({ id, name, type, value, className = "", placeholder, onChange }) => {
  return (
    <textarea id={id} type={type} name={name} value={value} className={`block w-full h-40 mt-2 px-3 py-2 text-gray-600 rounded-[4px] border-2 border-gray-100 focus:border-primary transition outline-none hover:border-gray-300 ${className}`} placeholder={placeholder} onChange={onChange} />
  )
}

const AddNewServiceFeedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rate: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/services', formData);
      console.log(response.data);
      toast.success('Feedback added successfully!');
      setFormData({
        name: '',
        email: '',
        rate: '',
        description: ''
      });
    } catch (error) {
      console.error('Error adding feedback:', error);
      toast.error('Failed to add feedback!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <form className='m-auto my-16 max-w-[500px] p-8 bg-white bg-opacity-50 border-2 shadow-md rounded-md'>
        <ToastContainer />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <h1 className='text-center mb-4'>Add New Service Feedback</h1>
            <div className="mb-4">
              <label htmlFor="name">Name:</label>
              <Input type="text" name="name" id="name" value={formData.name} placeholder="Your name" onChange={handleChange} />
            </div>

            <div className="mb-4">
              <label htmlFor="email">Email:</label>
              <Input type="email" name="email" id="email" value={formData.email} placeholder="youremail@domain.com" onChange={handleChange} />
            </div>

            <div className="mb-4">
              <label htmlFor="rate">Rate:</label>
              <Input type="number" name="rate" id="rate" value={formData.rate} min="1" max="10" onChange={handleChange} />
            </div>

            <div className="mb-4">
              <label htmlFor="description">Description:</label>
              <Textarea name="description" id="description" value={formData.description} placeholder="Your feedback description..." onChange={handleChange} />
            </div>

            <button className='bg-black text-white px-4 py-2 font-medium hover:bg-primary-dark' onClick={handleSubmit}>Submit</button>
          </>
        )}
      </form>
    </div>
  );
};

export default AddNewServiceFeedback;
