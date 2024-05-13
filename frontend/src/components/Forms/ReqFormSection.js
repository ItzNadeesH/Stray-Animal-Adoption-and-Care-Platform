import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReqFormSection = () => {
  const [requestForms, setRequestForms] = useState([]);

<<<<<<< HEAD
    useEffect(() => {
        axios.get('http://localhost:5000/requestforms/all')
            .then(response => setRequestForms(response.data))
            .catch(error => console.error('Error fetching request forms:', error));
    }, []);

    const handleAccept = (id) => {
        axios.put(`http://localhost:5000/requestforms/accept/${id}`)
            .then(response => {
                alert(response.data.message);
                window.location.reload();
            })
            .catch(error => {
                console.error('Error accepting request form:', error);
                alert('Failed to accept request: ' + (error.response?.data?.message || 'Server error'));
            });
    };

    const handleDecline = (id) => {
        axios.put(`http://localhost:5000/requestforms/decline/${id}`)
            .then(response => {
                alert(response.data.message);
                window.location.reload();
            })
            .catch(error => {
                console.error('Error declining request form:', error);
                alert('Failed to decline request: ' + (error.response?.data?.message || 'Server error'));
            });
    };

    const handleDelete = (id) =>{

        axios.delete(`http://localhost:5000/requestforms/delete/${id}`)
            .then(response =>{
                alert(response.data.message);
                window.location.reload();
            })
            .catch(error => {
                console.error('Error deleting request form:', error);
                alert('Failed to delete request: ' + (error.response?.data?.message || 'Server error'));
            });

    };

    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Request Forms</h2>
            {requestForms.map(form => (
                <div key={form._id} className="mb-6 p-4 bg-white rounded-lg shadow-md flex justify-between items-center">
                    <div>
                        <p className="text-gray-600 mb-2">Event Details: ${form.events}</p>
                        <p className="text-gray-600 mb-2">Date: {new Date(form.date).toLocaleDateString()}</p>
                        <p className="text-gray-600 mb-2">Total Amount: ${form.totalAmount}</p>
                        <p className="text-gray-600 mb-2">Status: {form.status}</p>
                    </div>
                    <div>
                        <button 
                            onClick={() => handleAccept(form._id)}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-3 ">
                            Accept
                        </button>
                        <button 
                            onClick={() => handleDecline(form._id)}
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md mr-3">
                            Decline
                        </button>
                        <button 
                            onClick={() => handleDelete(form._id)}
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md">
                            Delete
                        </button>

                    </div>
                </div>
            ))}
=======
  useEffect(() => {
    axios
      .get('/requestforms/all')
      .then((response) => setRequestForms(response.data))
      .catch((error) => console.error('Error fetching request forms:', error));
  }, []);

  const handleAccept = (id) => {
    axios
      .put(`/requestforms/accept/${id}`)
      .then((response) => {
        alert(response.data.message);
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error accepting request form:', error);
        alert(
          'Failed to accept request: ' +
            (error.response?.data?.message || 'Server error')
        );
      });
  };

  const handleDecline = (id) => {
    axios
      .put(`/requestforms/decline/${id}`)
      .then((response) => {
        alert(response.data.message);
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error declining request form:', error);
        alert(
          'Failed to decline request: ' +
            (error.response?.data?.message || 'Server error')
        );
      });
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Request Forms</h2>
      {requestForms.map((form) => (
        <div
          key={form._id}
          className="mb-6 p-4 bg-white rounded-lg shadow-md flex justify-between items-center"
        >
          <div>
            <p className="text-gray-600 mb-2">
              Date: {new Date(form.date).toLocaleDateString()}
            </p>
            <p className="text-gray-600 mb-2">
              Total Amount: ${form.totalAmount}
            </p>
            <p className="text-gray-600 mb-2">Status: {form.status}</p>
          </div>
          <div>
            <button
              onClick={() => handleAccept(form._id)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-2"
            >
              Accept
            </button>
            <button
              onClick={() => handleDecline(form._id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md"
            >
              Decline
            </button>
          </div>
>>>>>>> 5e54eb13a14a354805576da17e6b4f0c0cb417c1
        </div>
      ))}
    </div>
  );
};

export default ReqFormSection;
