import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import AdminNav from "../AdminNav/AdminNav";
import DisplayRequest from "../DisplayDonationRequests/DisplayRequest";
import { useReactToPrint } from "react-to-print";

// Define totalAllocation variable outside the component
let totalAllocation = 0;

function FetchDisplayRequest() {
  const [requests, setRequests] = useState([]);
  const ComponentsRef = useRef();
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    // Fetch donation requests data from backend
    axios
      .get("http://localhost:5000/requrements")
      .then((response) => {
        setRequests(response.data.maintanance);
      })
      .catch((error) => {
        console.error("Error fetching donation requests:", error);
      });
  }, []);

  const handleAccept = (id, amount) => {
    // Update total allocation with requested amount
    totalAllocation += amount;
    // Set the accepted property of the request to true
    setRequests(
      requests.map((request) =>
        request._id === id ? { ...request, accepted: true } : request
      )
    );
  };

  const handleReject = (id) => {
    // Remove the rejected request from the list
    setRequests(requests.filter((request) => request._id !== id));
  };

  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle: "Requests Information",
    onAfterPrint: () => alert("Requests report successfully downloaded"),
  });

  return (
    <div>
      <AdminNav />
      <div className="mt-10 mx-auto max-w-3xl">
        <h1 className="font-bold text-3xl text-blue-500 mb-8">
          Donation requests from shelter maintenance manager
        </h1>
        <div className="bg-blue-100 rounded p-4 mt-4">
          <h1 className="text-2xl font-bold text-center text-red-600">
            Total Amount Allocated: {totalAllocation}
          </h1>
        </div>
      </div>

      <div className="p-4" ref={ComponentsRef}>
        {requests.length > 0 ? (
          requests.map((request, i) => (
            <div key={i} className="mb-4">
              <DisplayRequest
                request={request}
                onAccept={() => handleAccept(request._id, request.amount)}
                onReject={() => handleReject(request._id)}
                accepted={accepted} // Pass the accepted prop
              />
            </div>
          ))
        ) : (
          <p>No donation requests available.</p>
        )}
      </div>
      <div className="flex justify-center">
        <button
          onClick={handlePrint}
          className="mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Print Requests
        </button>
      </div>
    </div>
  );
}

// Export totalAllocation along with the component
export { totalAllocation };
export default FetchDisplayRequest;
