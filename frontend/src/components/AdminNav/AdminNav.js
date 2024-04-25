import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="bg-blue-300 py-4 ">
      <ul className="flex justify-center">
        <li className="mr-6">
          <Link
            to="/Admin"
            className="text-black text-1xl  hover:text-blue-600"
            style={{ fontFamily: "Fredoka", fontWeight: 700 }}
          >
            Admin Home
          </Link>
        </li>
        <li className="mr-6">
          <Link
            to="/Admindetails"
            className="text-black text-1xl  hover:text-blue-600"
            style={{ fontFamily: "Fredoka", fontWeight: 700 }}
          >
            Donations OverView
          </Link>
        </li>
        <li className="mr-6">
          <Link
            to="/acceptrejectrequest"
            className="text-black text-1xl  hover:text-blue-600"
            style={{ fontFamily: "Fredoka", fontWeight: 700 }}
          >
            Donation Transfer Requests from Shelter Maintenance
          </Link>
        </li>
        <li>
          <Link
            to="/sendpdf"
            className="text-black text-1xl  hover:text-blue-600"
            style={{ fontFamily: "Fredoka", fontWeight: 700 }}
          >
            Send Receipts to Shelter Maintenance
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
