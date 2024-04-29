import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ActiveFeedbackForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    status: false, // Initial status value
    customerName: '', // Initial customer name
    customerEmail: '' // Initial customer email
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/Doctorfeedback/${id}`);
        const { status, customerName, customerEmail } = response.data.feedback;
        setFormData({ status, customerName, customerEmail }); // Set form data from response
        setLoading(false);
      } catch (error) {
        console.error('Error fetching feedback:', error);
        setLoading(false);
      }
    };

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
      await axios.put(`http://localhost:5000/api/Doctorfeedback/status/${id}`, formData);
      toast.success('Status updated successfully!');
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status!');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <form className='m-auto my-16 max-w-[500px] p-8 bg-white border-2 shadow-md rounded-md'>
      <ToastContainer />
      <>
        <h1 className='text-center mb-4'>EditFeedback Stuats</h1>

      
        <div className="mb-4">
          <label htmlFor="status">Status:</label>
          <select
            name="status"
            id="status"
            value={formData.status}
            onChange={handleChange}
            className="block w-full mt-2 px-3 py-2 text-gray-600 rounded-[4px] border-2 border-gray-100 focus:border-primary transition outline-none hover:border-gray-300"
          >
            <option value={true}>Approved</option>
            <option value={false}>Reject</option>
          </select>
        </div>

        <button className='bg-cyan-blue text-white px-4 py-2 font-medium rounded-lg' onClick={handleSubmit}>Submit</button>
        <Link to="/DisplayAllFeedback" className="block mt-4 text-center text-blue-600 underline hover:text-blue-800">Back to Feedback</Link>
      </>
    </form>
  );
};

export default ActiveFeedbackForm;
