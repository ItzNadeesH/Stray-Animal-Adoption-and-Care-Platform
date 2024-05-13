import React, { useState } from "react";
import AdminNav from "../AdminNav/AdminNav";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../ContactDonationManager/contactUsImage.png";

function DManagerRegister() {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    gmail: "",
    password: "", // Corrected field name
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendRequest();
      alert("Registration successful");
      history("/Admin");
    } catch (error) {
      alert("Error registering user: " + error.message);
    }
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/DManagerregister", {
      name: user.name,
      gmail: user.gmail,
      password: user.password,
    });
  };

  return (
    <div>
      <AdminNav />
      <div className="container mx-auto flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white rounded-lg shadow-lg p-8"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-2xl font-bold mb-4">Admin Registration</h1>
          <label htmlFor="username" className="block mb-2">
            Admin Name:
          </label>
          <input
            type="text"
            value={user.name}
            onChange={handleInputChange}
            id="username"
            name="name"
            required
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-blue-500"
          />
          <label htmlFor="gmail" className="block mb-2">
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
          <label htmlFor="password" className="block mb-2">
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
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
          >
            Register Admin
          </button>
        </form>
      </div>
    </div>
  );
}

export default DManagerRegister;
