import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
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

const ServiceFeedbackEdit = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rate: '',
    description: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/services/${id}`);
        console.log('Response:', response.data); 
        setFormData(response.data.feedback); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching feedback:', error);
        setLoading(false);
      }
    };

    console.log('Fetching feedback for id:', id); 
    fetchFeedback();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`http://localhost:5000/api/services/${id}`, formData);
      toast.success('Feedback updated successfully!');
    } catch (error) {
      console.error('Error updating feedback:', error);
      toast.error('Failed to update feedback!');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{   backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh'  }} >
      <br></br>
    <form className='my-1 mx-auto max-w-[800px]  py-6 bg-cover p-8 bg-white bg-opacity-50 border-2 shadow-md rounded-md '>
      <ToastContainer />
      <>
        <h1 className='text-center mb-4'>Edit Serivces Feedback</h1>
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

        <button className='bg-primary text-white px-4 py-2 font-medium hover:bg-primary-dark' onClick={handleSubmit}>Submit</button>
        <Link to={`/services/${id}`} className="block mt-4 text-center text-blue-600 underline hover:text-blue-800">Back to Feedback list</Link>

      </>
    </form>
    </div>
  );
};

export default ServiceFeedbackEdit;
