import React, { useEffect, useState, useRef } from "react";
import AdminNav from "../AdminNav/AdminNav";
import axios from "axios";
import DonationDisplay from "../DonationDisplayForAdmin/DonationDisplayForAdmin";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";
import { totalAllocation } from "../DisplayDonationRequests/FetchDisplayRequest"; // Import totalAllocation
import Chart from "chart.js/auto";

const URL = "http://localhost:5000/donations";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function AdminDashboard() {
  const [donations, setDonations] = useState();
  const [totalDonation, setTotalDonation] = useState(0); // Initialize totalDonation state
  const [totalDonationGathered, setTotalDonationGathered] = useState(0); // Initialize totalDonationGathered state
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDonations, setFilteredDonations] = useState(null);
  const ComponentsRef = useRef();
  const chartRef = useRef(null); // Reference to the chart canvas
  const chartInstance = useRef(null); // Reference to the chart instance

  useEffect(() => {
    fetchHandler().then((data) => {
      setDonations(data.donations);
      // Calculate total donation amount
      const total = data.donations.reduce(
        (acc, donation) => acc + donation.amount,
        0
      );
      setTotalDonation(total);
      // Set total donation gathered amount
      setTotalDonationGathered(total);
      // Update chart data
      if (chartRef.current) {
        // Destroy existing chart instance if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        const ctx = chartRef.current.getContext("2d");
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Total Donation Gathered", "totalAllocation"],
            datasets: [
              {
                label: "Amount (Rs)",
                data: [totalDonationGathered, totalAllocation], // Ensure totalAllocation is accessible here
                backgroundColor: [
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 99, 132, 0.2)",
                ],
                borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    });
  }, [totalDonationGathered, totalAllocation]); // Ensure totalAllocation is included in the dependency array

  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle: "Donation Information",
    onAfterPrint: () => alert("Donations report successfully downloaded"),
  });

  const handleSearch = () => {
    const filtered = donations.filter((donation) =>
      Object.values(donation).some(
        (field) =>
          field.toString().toLowerCase().indexOf(searchQuery.toLowerCase()) !==
          -1
      )
    );
    setFilteredDonations(filtered);
  };

  // Function to calculate pending donation amount
  const calculatePendingDonation = () => {
    return totalDonationGathered - totalAllocation;
  };

  return (
    <div>
      <AdminNav />
      <div className="bg-blue-200 rounded p-8">
        <h1 className="mb-0 text-3xl font-bold text-center text-blue-900">
          "AWPA" Admin Dashboard
        </h1>
        {/* Display total donation gathered amount */}
        <h1 className="mt-8 mb-4 text-4xl font-bold text-center text-green-600">
          Total Donation Gathered: Rs.{totalDonationGathered}
        </h1>
        {/* Display total allocated amount */}
        <h1 className="mt-4 mb-10 text-4xl font-bold text-center text-red-600">
          Total Amount Allocated: Rs.{totalAllocation}
        </h1>
        <div className="text-center mt-4">
          <Link
            to="/acceptrejectrequest"
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
          >
            Go to Donation Allocation Site
          </Link>
        </div>
        <div className="mt-5 center items">
          <div className="bg-gray-100 p-4 rounded-lg flex">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              name="search"
              placeholder="Search Donation Details"
              className="py-2 px-4 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Table for displaying total donation amount */}
      <div className="mt-8 mx-auto max-w-3xl">
        <h1 className="text-2xl font-bold text-blue-500 mb-4">
          Total Donations Collected and Spent
        </h1>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-blue-200">
              <th className="border border-gray-400 px-4 py-2">
                Total Donation Gathered
              </th>
              <th className="border border-gray-400 px-4 py-2">
                Total Amount Allocated
              </th>
              <th className="border border-gray-400 px-4 py-2">
                Pending Donation Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2 text-center">
                Rs.{totalDonationGathered}
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                Rs.{totalAllocation}
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                Rs.{calculatePendingDonation()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bar graph displaying total donation information */}
      <div className="mt-8 mx-auto max-w-3xl">
        <h1 className="text-2xl font-bold text-blue-500 mb-4">
          Total Donation Information
        </h1>
        <canvas ref={chartRef}></canvas>
      </div>

      <div ref={ComponentsRef}>
        {(filteredDonations || donations) &&
          (filteredDonations || donations).map((donation, i) => (
            <div key={i}>
              <DonationDisplay donation={donation} />
            </div>
          ))}
      </div>

      {/* Button to download donation report */}
      <div className="flex justify-center">
        <button
          onClick={handlePrint}
          className="mt-20 mb-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download Donation Report
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
