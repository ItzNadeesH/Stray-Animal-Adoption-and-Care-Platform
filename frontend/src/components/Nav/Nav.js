import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="bg-blue-200 py-4 ">
      <ul className="flex justify-center">
        <li className="mr-6">
          <Link
            to="/donationhome"
            className="text-black text-1xl  hover:text-blue-600"
            style={{ fontFamily: "Fredoka", fontWeight: 700 }}
          >
            Donation Home
          </Link>
        </li>
        <li className="mr-6">
          <Link
            to="/adddonation"
            className="text-black text-1xl  hover:text-blue-600"
            style={{ fontFamily: "Fredoka", fontWeight: 700 }}
          >
            Add Donation
          </Link>
        </li>
        <li className="mr-6">
          <Link
            to="/donationdetails"
            className="text-black text-1xl  hover:text-blue-600"
            style={{ fontFamily: "Fredoka", fontWeight: 700 }}
          >
            View All Donations
          </Link>
        </li>
        <li>
          <Link
            to="/contactdonationmanager"
            className="text-black text-1xl  hover:text-blue-600"
            style={{ fontFamily: "Fredoka", fontWeight: 700 }}
          >
            Contact Donation Manager
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
