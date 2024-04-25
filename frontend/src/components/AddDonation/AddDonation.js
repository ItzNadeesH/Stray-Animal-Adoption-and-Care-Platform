import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router";
import axios from "axios";
import backgroundImage from "../DonationHomePage/background.png";

function AddDonation() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    donorname: "",
    donoremail: "",
    message: "",
    address: "",
    amount: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequests().then(() => history("/donationpreview"));
  };

  const sendRequests = async () => {
    await axios
      .post("http://localhost:5000/donations", {
        donorname: String(inputs.donorname),
        donoremail: String(inputs.donoremail),
        message: String(inputs.message),
        address: String(inputs.address),
        amount: Number(inputs.amount),
      })
      .then((res) => res.data);
  };

  const handleAmountChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      amount: e.target.value,
    }));
  };

  const handleFixedAmountClick = (amount) => {
    setInputs((prevState) => ({
      ...prevState,
      amount: amount.toString(),
    }));
  };

  return (
    <div>
      <Nav />
      <div
        className="main flex items-center justify-center h-screen bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-white bg-opacity-80 p-8 rounded-lg text-center">
          <h1 className="text-center text-blue-500 text-4xl font-bold mb-8 mt-10">
            Welcome to "AWPA" Donation Center
          </h1>
          <p class="mt-5 mb-5 text-xl font-bold">
            Please enter your information below to make a donation:
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="donorname"
              placeholder="donorname"
              onChange={handleChange}
              value={inputs.donorname}
              className="block mx-auto my-2 p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="donoremail"
              placeholder="donoremail"
              onChange={handleChange}
              value={inputs.donoremail}
              className="block mx-auto my-2 p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="message"
              placeholder="message"
              onChange={handleChange}
              value={inputs.message}
              className="block mx-auto my-2 p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="address"
              onChange={handleChange}
              value={inputs.address}
              className="block mx-auto my-2 p-2 border border-gray-300 rounded"
              required
            />
            <h1 class="mt-5 mb-5 text-1xl font-bold">
              Select your preferred donation amount
            </h1>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => handleFixedAmountClick(1000)}
                className="mx-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Rs.1000
              </button>
              <button
                type="button"
                onClick={() => handleFixedAmountClick(5000)}
                className="mx-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Rs.5000
              </button>
              <button
                type="button"
                onClick={() => handleFixedAmountClick(6000)}
                className="mx-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Rs.6000
              </button>
            </div>
            <input
              type="number"
              name="amount"
              placeholder="Enter custom amount"
              onChange={handleAmountChange}
              value={inputs.amount}
              className="block mx-auto my-2 p-2 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="block mx-auto my-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddDonation;
