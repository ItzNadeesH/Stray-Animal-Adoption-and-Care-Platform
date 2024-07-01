import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ authState, handleLogoutClick }) => {
  return (
    <header className="flex justify-between sticky top-0 p-4 bg-white shadow-sm items-center">
      
      <h2 className="cursor-pointer uppercase font-medium">
        <Link to="/all-feedback "> Feedback user  </Link>
      </h2>
      <h2 className="cursor-pointer uppercase font-medium">
        <Link to="/all-servies"> Feedback doctor  </Link>
      </h2>
      <ul className="hidden md:flex gap-4 uppercase font-medium">
        <>
          <li className="bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-md">
            <Link to="/add-feedback" className="block w-full h-full px-4 py-2">
              {" "}
              <i className="fa-solid fa-plus"></i> Add Doctor Feedback{" "}
            </Link>
          </li>
          {/* <li className='py-2 px-3 cursor-pointer hover:bg-gray-200 transition rounded-sm' >Logout</li> */}
        </>
        <>
          <li className="bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-md">
            <Link to="/add-services" className="block w-full h-full px-4 py-2">
              {" "}
              <i className="fa-solid fa-plus"></i> Add User Feedback{" "}
            </Link>
          </li>
          {/* <li className='py-2 px-3 cursor-pointer hover:bg-gray-200 transition rounded-sm' >Logout</li> */}
        </>
        
      </ul>
    </header>
  );
};

export default NavBar;
