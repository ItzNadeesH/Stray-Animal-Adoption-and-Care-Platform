import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../DonationHomePage/background.png";

function DonationHome() {
  const navigate = useNavigate();
  const [totalDonation, setTotalDonation] = useState();

  useEffect(() => {
    const fetchTotalDonation = async () => {
      try {
        const response = await axios.get("http://localhost:5000/donations");
        const total = response.data.donations.reduce(
          (acc, donation) => acc + donation.amount,
          0
        );
        setTotalDonation(total);
      } catch (error) {
        console.error("Error fetching total donation:", error);
      }
    };

    fetchTotalDonation();
  }, []);

  const handleButtonClick = () => {
    navigate("/adddonation");
  };
  //add function to navigate to review page
  const handleButtonClickforreview = () => {
    navigate("/add-services");
  };

  return (
    <div>
      <Nav />
      <div
        className="main flex items-center justify-center h-screen bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="icon"></div>
        <div className="content text-center">
          <h1 className="text-4xl font-bold text-blue-500">
            AWPA Animal adoption & care platform & <br />
            <span className="text-blue-500">Donation Collecting</span> <br />
            Site
          </h1>

          <h1 className="text-1xl font-bold mt-6">
            Total Donation Amount collected
          </h1>
          <h2 className="text-5xl font-bold ">
            Total Amount : Rs.{totalDonation}
          </h2>

          <p className="par mt-6 text-1xl font-bold">
            "AWPA" , We're a non-profit organization that collects donations to
            support stray animals. Donate your desired donations below.
          </p>
          <p className="par mt-6 text-1xl font-bold">Donate Here</p>
          <button
            className="bg-blue-500 text-white text-2xl py-4 px-12 rounded mt-4"
            onClick={handleButtonClick}
          >
            Donate
          </button>

          <div className="form mt-6">
            <p className="link par mt-6 text-1xl font-bold">
              Leave a memory about us...
              <br />
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
                onClick={handleButtonClickforreview}
              >
                Feedbacks
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationHome;
