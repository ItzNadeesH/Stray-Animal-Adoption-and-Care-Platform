import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './DisplayAllFeedback.css'; 
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const DisplayAllFeedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const feedbackContainerRef = useRef(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/Doctorfeedback/');
        setFeedbackList(response.data.doctorFeedback);
        setLoading(false);
        

        if (feedbackContainerRef.current) {
          feedbackContainerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      } catch (error) {
        console.error('Error fetching feedback:', error);
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredFeedbackList = feedbackList.filter(feedback =>
    Object.values(feedback).some(value =>
      typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('All Feedback', 10, 10);
    doc.autoTable({
      head: [['Customer Name', 'Doctor Name', 'Rating', 'Feedback', 'Status']],
      body: filteredFeedbackList.map(feedback => [
        feedback.customerName,
        feedback.doctorName,
        feedback.doctorRating,
        feedback.doctorrfeedback,
        feedback.status ? 'Accepted' : 'Rejected'
      ])
    });
    doc.save('feedback_table.pdf');
  };

  return (
    <div className="h-screen flex justify-center items-center">
    
      <div
        ref={feedbackContainerRef}
        className="my-2 mx-auto w-full max-w-[700px] py-4 bg-cover p-4 bg-white bg-opacity-50 border-2 shadow-md rounded-md feedback-table"
        style={{ minWidth: '80vw', minHeight: '80vh' }} 
      >
        <ToastContainer />
        <h2 style={{ color:"white" }} className='my-2 ml- md:ml-0 text-xl'>All Feedback</h2>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="px-4 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none"
          />
          <button onClick={generatePDF} className="px-4 py-2 bg-blue-500 text-white rounded-md">Generate PDF</button>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Doctor Name</th>
                <th>Rating</th>
                <th>Feedback</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredFeedbackList.map(feedback => (
                <tr key={feedback._id}>
                  <td>{feedback.customerName}</td>
                  <td>{feedback.doctorName}</td>
                  <td>{feedback.doctorRating}</td>
                  <td>{feedback.doctorrfeedback}</td>
                  <td>{feedback.status ? 'Accepted' : 'Rejected'}</td>
                  <td>
                  <Link to={`/ActiveFeedbackForm/${feedback._id}`} className="px-4 py-2 bg-red-500 text-white rounded-md">
  Edit Status
</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DisplayAllFeedback;
