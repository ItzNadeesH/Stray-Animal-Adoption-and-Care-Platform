import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DonationDisplay(props) {
  const { _id, donorname, donoremail, message, address, amount } =
    props.donation || {};

  const history = useNavigate();

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/donations/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/donationhome"));
  };

  return (
    <div>
      <div className="donation-table bg-blue-100 border border-gray-200 p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Donation Information</h1>
        <table className="w-full">
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <td className="border border-gray-300 p-2">{_id}</td>
          </tr>
          <tr>
            <th className="border border-gray-300 p-2">Donor Name</th>
            <td className="border border-gray-300 p-2">{donorname}</td>
          </tr>
          <tr>
            <th className="border border-gray-300 p-2">Donor Email</th>
            <td className="border border-gray-300 p-2">{donoremail}</td>
          </tr>
          <tr>
            <th className="border border-gray-300 p-2">Message</th>
            <td className="border border-gray-300 p-2">{message}</td>
          </tr>
          <tr>
            <th className="border border-gray-300 p-2">Address</th>
            <td className="border border-gray-300 p-2">{address}</td>
          </tr>
          <tr>
            <th className="border border-gray-300 p-2">Amount</th>
            <td className="border border-gray-300 p-2">{amount}</td>
          </tr>
        </table>

        <div className="buttons mt-4">
          <Link
            to={`/donationdetailsbeforeConfirm/${_id}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mr-2"
            style={{ minWidth: "100px" }} // Adjust the minWidth as needed
          >
            Update
          </Link>
          <button
            onClick={deleteHandler}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-block"
            style={{ minWidth: "100px" }} // Adjust the minWidth as needed
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DonationDisplay;
