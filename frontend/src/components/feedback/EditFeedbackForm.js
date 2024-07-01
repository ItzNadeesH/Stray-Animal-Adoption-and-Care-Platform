import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams , Link    } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from '../../images/fedback.jpeg'; 


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

const EditFeedbackForm = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    doctorName: '',
    doctorRating: '',
    doctorrfeedback: ''
  });
  const [loading, setLoading] = useState(true);

    // Fetch feedback data based on id parameter
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/Doctorfeedback/${id}`);
        console.log('Response:', response.data); // Log response data
        setFormData(response.data.Doctorfeedback); // Update state with response data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching feedback:', error);
        setLoading(false);
      }
    };
  
    console.log('Fetching feedback for id:', id); // Log id parameter
    fetchFeedback();
  }, [id]);
  
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`http://localhost:5000/api/Doctorfeedback/${id}`, formData);
      toast.success('Feedback updated successfully!');
    } catch (error) {
      console.error('Error updating feedback:', error);
      toast.error('Failed to update feedback!');
    } finally {
      setLoading(false);
    }
  };
 
    // Render loading message while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

    // Render the form once data is loaded
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
<br></br>
    <form className='m-auto my-16 max-w-[500px] p-8 bg-white bg-opacity-50 border-2 shadow-md rounded-md'>
      <ToastContainer />
      <>
        <h1 className='text-center mb-4'>Edit Feedback</h1>
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
          <Input type="number" name="doctorRating" id="doctorRating" value={formData.doctorRating} min="1" max="10" onChange={handleChange} />
        </div>

        <div className="mb-4">
          <label htmlFor="doctorrfeedback">Doctor Feedback:</label>
          <Textarea name="doctorrfeedback" id="doctorrfeedback" value={formData.doctorrfeedback} placeholder="Your feedback for the doctor.." onChange={handleChange} />
        </div>

        <button className='bg-primary text-white px-4 py-2 font-medium hover:bg-primary-dark' onClick={handleSubmit}>Submit</button>
        <Link to="/all-feedback" className="block mt-4 text-center text-blue-600 underline hover:text-blue-800">Back to Home</Link>


      </>
    </form>
    </div>
  );
};

export default EditFeedbackForm;