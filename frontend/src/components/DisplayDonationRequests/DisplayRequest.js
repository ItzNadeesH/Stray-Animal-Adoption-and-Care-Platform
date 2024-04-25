//this page display repeatedly (for each donation this will iterate)
// DisplayRequest.js

import React, { useState } from "react"; // Import useState hook
import { useNavigate } from "react-router-dom";

function DisplayRequest({ request, onAccept, onReject, accepted }) {
  const { _id, formID, date, description, amount } = request || {};
  const history = useNavigate();

  // Define accepted state variable and its setter function
  const [isAccepted, setIsAccepted] = useState(accepted);

  const handleAccept = () => {
    onAccept(_id); // Call the parent component's onAccept function
    setIsAccepted(true); // Update accepted state when accept button is clicked
  };

  return (
    <div className="donation-table border border-gray-200 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Request Information</h1>
      <div className="flex flex-row justify-between">
        <div>
          <p className="font-bold">ID: {_id}</p>
          <p>Form ID: {formID}</p>
          <p>Date: {new Date(date).toLocaleDateString()}</p>
          <p>Description: {description}</p>
          <p>Amount: {amount}</p>
        </div>
        <div>
          {/* Display checkmark icon if accepted */}
          {isAccepted && <span className="text-green-500 mr-2">&#10004;</span>}
          <button
            onClick={handleAccept}
            className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Accept
          </button>
          <button
            onClick={() => onReject(_id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

export default DisplayRequest;
