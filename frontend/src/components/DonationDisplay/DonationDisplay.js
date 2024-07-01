import React from "react";

function DonationDisplay(props) {
  const { donorname, message, address, amount } = props.donation || {};

  return (
    <div>
      <div className="donation-box bg-blue-100 border border-blue-400 p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-semibold mb-2">
          Donation from {donorname}
        </h1>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Donor Name:</span>
            <span className="text-sm text-lg text-green-700">{donorname}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold">Message:</span>
            <span className="text-sm">{message}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Amount:</span>
            <span className="text-lg  text-red-600">{amount}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Address:</span>
            <span className="text-sm">{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationDisplay;
