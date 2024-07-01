import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
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
      history("/donationdetails");
    } catch (error) {
      alert("Error registering user: " + error.message);
    }
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/register", {
      name: user.name,
      gmail: user.gmail,
      password: user.password,
    });
  };

  return (
    <div>
      <Nav />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>User Registration</h1>
          <label>Name:</label>
          <input
            type="text"
            value={user.name}
            onChange={handleInputChange}
            id="username"
            name="name"
            required
          />
          <label>Gmail:</label> {/* Corrected type from "gmail" to "email" */}
          <input
            type="email"
            value={user.gmail}
            onChange={handleInputChange}
            id="gmail"
            name="gmail"
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={user.password}
            onChange={handleInputChange}
            id="password"
            name="password"
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
