import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HoverDropdown = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <button
        id="dropdownHoverButton"
        className="text-black focus:outline-none text-center inline-flex items-center"
        type="button"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        Services
      </button>
      <div
        id="dropdownHover"
        className={`${
          !active && 'hidden'
        } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute`}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHoverButton"
        >
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-black hover:bg-cyan-blue hover:text-white transition-all"
            >
              Adoption
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-black hover:bg-cyan-blue hover:text-white transition-all"
            >
              Lost and Found
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-black hover:bg-cyan-blue hover:text-white transition-all"
            >
              Donations
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-black hover:bg-cyan-blue hover:text-white transition-all"
            >
              Volunteers
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-black hover:bg-cyan-blue hover:text-white transition-all"
            >
              Shelters
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-black hover:bg-cyan-blue hover:text-white transition-all"
            >
              Feedbacks
            </Link>
          </li>
          <li>
            <Link
              to="/store"
              className="block px-4 py-2 text-black hover:bg-cyan-blue hover:text-white transition-all"
            >
              Store
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HoverDropdown;
