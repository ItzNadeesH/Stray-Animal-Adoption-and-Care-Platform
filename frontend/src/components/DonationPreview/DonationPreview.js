import React, { useEffect, useState, useRef } from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import DonationDisplay from '../DonationDisplayForUser/DonationDisplayForUser';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout'; // Import StripeCheckout component

const URL = 'http://localhost:5000/donations';

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function DonationsDisplay() {
  const [latestDonation, setLatestDonation] = useState(null);
  const ComponentsRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    fetchHandler().then((data) => {
      if (data.donations.length > 0) {
        const latest = data.donations[data.donations.length - 1];
        setLatestDonation(latest);
      }
    });
  }, []);

  // Function to handle token received from Stripe
  const handleToken = (token) => {
    // Make API call to your server to process the payment
    axios
      .post('/charge', { token, amount: latestDonation.amount })
      .then((response) => {
        // Payment successful, navigate to summary page
        navigate('/donationdetails');
        console.log('Payment successful:', response.data);
      })
      .catch((error) => {
        // Handle payment error
        console.error('Payment error:', error);
      });
  };

  return (
    <div>
      <Nav />
      <h1 className="text-center text-blue-500 text-3xl font-bold mb-8 mt-10">
        Preview Your Donation Information Before Processing
      </h1>
      <div ref={ComponentsRef} className="p-4">
        {latestDonation && <DonationDisplay donation={latestDonation} />}
      </div>
      <div className="flex justify-center">
        {/* Stripe Checkout button */}
        <StripeCheckout
          token={handleToken} // Function to handle token received from Stripe
          stripeKey="your_stripe_publishable_key" // Replace with your actual publishable key
          amount={latestDonation ? latestDonation.amount * 100 : 0} // Amount in cents
          name="AWPA Animal Adoption And Care Platform"
          description="Donation Payment"
          image="https://your-charity-logo.png"
          currency="rupees"
          locale="auto"
          billingAddress="awpa donation managemenet system,richmondhill,galle"
          shippingAddress
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Complete Donation
          </button>
        </StripeCheckout>
      </div>
    </div>
  );
}

export default DonationsDisplay;
