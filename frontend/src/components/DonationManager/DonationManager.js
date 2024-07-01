import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import backgroundImage from '../DonationManager/loginbackground.jpg';

function DonationManager() {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: '',
    gmail: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendRequest();
      if (response && response.data && response.data.status === 'ok') {
        alert('Login successful');
        history('/admindetails');
      } else {
        alert('Incorrect email or password');
      }
    } catch (error) {
      alert('Error logging in: ' + error.message);
    }
  };

  const sendRequest = async () => {
    return await axios
      .post('http://localhost:5000/Adminlogin', {
        gmail: user.gmail,
        password: user.password,
      })
      .then((response) => {
        return response;
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-lg p-6"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
          Welcome to Donation Manager Dashboard
        </h1>

        <h2 className="text-lg font-semibold mb-2">enter your credentials</h2>
        <h1 className="text-xl font-bold mb-2"> Login As Donation Manager</h1>
        <label htmlFor="gmail" className="block mb-1">
          Gmail:
        </label>
        <input
          type="email"
          value={user.gmail}
          onChange={handleInputChange}
          id="gmail"
          name="gmail"
          required
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-blue-500"
        />
        <label htmlFor="password" className="block mb-1">
          Password:
        </label>
        <input
          type="password"
          value={user.password}
          onChange={handleInputChange}
          id="password"
          name="password"
          required
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-blue-500"
        />
        <h2 className="text-lg font-semibold mb-2">Click here to login</h2>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-600 w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default DonationManager;
