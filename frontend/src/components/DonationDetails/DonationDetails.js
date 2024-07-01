import React, { useEffect, useState, useRef } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import Donationdisplay from "../DonationDisplay/DonationDisplay";
import { useReactToPrint } from "react-to-print";
import backgroundImage from "../DonationHomePage/background.png";

const URL = "http://localhost:5000/donations";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function DonationsDisplay() {
  const [donations, setDonations] = useState();
  const ComponentsRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    fetchHandler().then((data) => setDonations(data.donations));
  }, []);

  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle: "Donation Information",
    onAfterPrint: () => alert("Donations report successfully downloaded"),
  });

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredDonations = data.donations.filter((donation) =>
        Object.values(donation).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setDonations(filteredDonations);
      setNoResults(filteredDonations.length === 0);
    });
  };

  return (
    <div>
      {" "}
      <Nav />
      <div>
        <h1 className="text-center text-blue-500 text-3xl font-bold mb-8 mt-10">
          All your precise donations will display here
        </h1>
        <div className="center items items-center mb-5">
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
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Search
            </button>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center">All Donations</h1>
        {/* Corrected function name */}
        {noResults ? (
          <div>
            <p>No donations found</p>
          </div>
        ) : (
          <div ref={ComponentsRef} className="p-4">
            {donations &&
              donations.map((donation, i) => (
                <div key={i} className="mb-4">
                  <Donationdisplay donation={donation} />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DonationsDisplay;
