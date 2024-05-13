import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateDonation() {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/donations/${id}`
        );
        setInputs(response.data.donation);
      } catch (error) {
        console.error("Error fetching donation details:", error);
      }
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios.put(`http://localhost:5000/donations/${id}`, {
      donorname: String(inputs.donorname),
      donoremail: String(inputs.donoremail),
      message: String(inputs.message),
      address: String(inputs.address),
      amount: Number(inputs.amount),
    });
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendRequest();
    history("/Admindetails");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Update Donation</h1>
      <div className="max-w-lg mx-auto bg-blue-50 border border-blue-400 p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg text-blue-700 font-semibold">
              Name
            </label>
            <input
              type="text"
              name="donorname"
              onChange={handleChange}
              value={inputs.donorname || ""}
              className="form-input mt-1 block w-full rounded-md border-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-lg text-blue-700 font-semibold">
              Message
            </label>
            <input
              type="text"
              name="message"
              onChange={handleChange}
              value={inputs.message || ""}
              className="form-input mt-1 block w-full rounded-md border-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-lg text-blue-700 font-semibold">
              Address
            </label>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              value={inputs.address || ""}
              className="form-input mt-1 block w-full rounded-md border-gray-300"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateDonation;
