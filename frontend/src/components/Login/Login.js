import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    gmail: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendRequest();
      if (response && response.data && response.data.status === "ok") {
        alert("Login successful");
        history("/donationdetails");
      } else {
        alert("Incorrect email or password");
      }
    } catch (error) {
      alert("Error logging in: " + error.message);
    }
  };
  const sendRequest = async () => {
    return await axios
      .post("http://localhost:5000/login", {
        gmail: user.gmail,
        password: user.password,
      })
      .then((response) => {
        return response;
      });
  };

  return (
    <div>
      <Nav />

      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>User Login</h1>
          <label>Gmail:</label> {/* Corrected type from "gmail" to "email" */}
          <input
            type="gmail"
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
