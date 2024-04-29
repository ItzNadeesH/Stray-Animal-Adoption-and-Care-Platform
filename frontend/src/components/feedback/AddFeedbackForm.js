// AddFeedbackForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from '../../images/add.jpeg'; 
import { validateEmail, validateRating } from './validation'; 

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

const AddFeedbackForm = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    doctorName: '',
    doctorRating: '',
    doctorrfeedback: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.customerEmail)) {
      toast.error('Invalid email address');
      return;
    }

    if (!validateRating(formData.doctorRating)) {
      toast.error('Invalid rating. Please select a rating between 1 and 10.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/Doctorfeedback/', formData);
      console.log(response.data);
      toast.success('Feedback added successfully!');
      setFormData({
        customerName: '',
        customerEmail: '',
        doctorName: '',
        doctorRating: '',
        doctorrfeedback: ''
      });
    } catch (error) {
      console.error('Error adding feedback:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <br></br>
      <form className='m-auto my-16 max-w-[500px] p-8 bg-white bg-opacity-50 border-2 shadow-md rounded-md'>
        <ToastContainer />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <h1 className='text-center mb-4'>Add Doctor Feedback</h1>
            <div className="mb-4">
              <label htmlFor="customerName">Customer Name:</label>
              <Input type="text" name="customerName" id="customerName" value={formData.customerName} placeholder="Your name" onChange={handleChange} />
            </div>

            <div className="mb-4">
              <label htmlFor="customerEmail">Customer Email:</label>
              <Input type="email" name="customerEmail" id="customerEmail" value={formData.customerEmail} placeholder="youremail@domain.com" onChange={handleChange} />
            </div>

            <div className="mb-4">
              <label htmlFor="doctorName">Doctor Name:</label>
              <Input type="text" name="doctorName" id="doctorName" value={formData.doctorName} placeholder="Doctor's name" onChange={handleChange} />
            </div>

            <div className="mb-4">
              <label htmlFor="doctorRating">Doctor Rating:</label>
              <select name="doctorRating" id="doctorRating" value={formData.doctorRating} onChange={handleChange} className="block w-full mt-2 px-3 py-2 text-gray-600 rounded-[4px] border-2 border-gray-100 focus:border-primary transition outline-none hover:border-gray-300">
                <option value="">Select Rating (1-10)</option>
                {[...Array(10)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>{index + 1}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="doctorrfeedback">Doctor Feedback:</label>
              <Textarea name="doctorrfeedback" id="doctorrfeedback" value={formData.doctorrfeedback} placeholder="Your feedback for the doctor.." onChange={handleChange} />
            </div>

            <button className='bg-black text-white px-4 py-2 font-medium hover:bg-primary-dark' onClick={handleSubmit}>Submit</button>
          </>
        )}
      </form>
    </div>
  );
};

export default AddFeedbackForm;
