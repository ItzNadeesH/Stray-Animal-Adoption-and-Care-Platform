import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from '../../images/fedback.jpeg'; 

const AllFeedbackService = () => {
  const [servicesList, setServicesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/services');
        setServicesList(response.data.servicesFeedback || []); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirmed = window.confirm('Are you sure you want to delete this service?');
      if (confirmed) {
        await axios.delete(`http://localhost:5000/api/services/${id}`);
        setServicesList(prevServices => prevServices.filter(service => service._id !== id));
        toast.success('Service deleted successfully!');
      }
    } catch (error) {
      console.error('Error deleting service:', error);
      toast.error('Failed to delete service!');
    }
  };

  return (
    <>
    <header className="flex justify-between sticky top-0 p-4 bg-white shadow-sm items-center">
      
      <h2 className="cursor-pointer uppercase font-medium">
        <Link to="/all-feedback "> Feedback Doctor  </Link>
      </h2>
      <h2 className="cursor-pointer uppercase font-medium">
        <Link to="/all-servies"> Service Feedback  </Link>
      </h2>
      <ul className="hidden md:flex gap-4 uppercase font-medium">
        <>
          <li className="bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-md">
            <Link to="/add-services" className="block w-full h-full px-4 py-2">
              {" "}
              <i className="fa-solid fa-plus"></i> Add Service Feedback{" "}
            </Link>
          </li>
          {/* <li className='py-2 px-3 cursor-pointer hover:bg-gray-200 transition rounded-sm' >Logout</li> */}
        </>
        
      </ul>
    </header>
    
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <br></br>
      <div className="my-2 mx-auto max-w-[700px] py-7 bg-cover p-4 bg-white bg-opacity-50 border-2 shadow-md rounded-md ">
        <ToastContainer />
        <h2 style={{ color:"black" }} className='my-2 ml-2 md:ml-0 text-xl'>All Services Feedback </h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {servicesList.length === 0 ? (
              <div className='w-[600px] h-[300px] flex items-center justify-center gap-4'>
                <span>No services feedback available.</span>
              </div>
            ) : (
              <div>
                {servicesList.map(service => (
                  <div key={service._id} className='bg-white my-4 p-4 text-gray-600 rounded-md shadow-md'>
                    <div className='flex items-center'>
                      <p><strong>Name:</strong> {service.name}</p>
                      <div className='ml-auto'>
                        <Link to={`/ServiceFeedbackEdit/${service._id}`} className='text-blue-500 cursor-pointer mr-2'>
                          Edit
                        </Link>
                        <button className='text-red-500 cursor-pointer' onClick={() => handleDelete(service._id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                    <p><strong>Email:</strong> {service.email}</p>
                    <p><strong>Rating:</strong> {service.rate}</p>
                    <p><strong>Description:</strong> {service.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default AllFeedbackService;
