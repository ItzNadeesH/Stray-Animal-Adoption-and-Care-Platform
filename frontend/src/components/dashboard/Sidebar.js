import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = ({ selected, onSelect }) => {
  const role = useSelector((state) => state.userAuth.user.role);

  const adminLinks = (
    <>
      <li>
        <div
          onClick={() => {
            onSelect('Dashboard');
          }}
          className={`${
            selected === 'Dashboard' && 'bg-cyan-blue text-white'
          } flex items-center p-2 text-cyan-blue rounded-lg cursor-pointer font-light transition-all group`}
        >
          <svg
            className={`${
              selected === 'Dashboard' && 'text-white'
            } flex-shrink-0 w-5 h-5 text-cyan-blue transition duration-75 `}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 21"
          >
            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
          </svg>
          <span className="ms-3">Dashboard</span>
        </div>
      </li>
      <li>
        <div
          onClick={() => onSelect('Users')}
          className={`${
            selected === 'Users' && 'bg-cyan-blue text-white'
          } flex items-center p-2 text-cyan-blue rounded-lg cursor-pointer font-light transition-all group`}
        >
          <svg
            className={`${
              selected === 'Users' && 'text-white'
            } flex-shrink-0 w-5 h-5 text-cyan-blue transition duration-75 `}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
          </svg>
          <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
        </div>
      </li>
      <li>
        <div
          onClick={() => onSelect('Orders')}
          className={`${
            selected === 'Orders' && 'bg-cyan-blue text-white'
          } flex items-center p-2 text-cyan-blue rounded-lg cursor-pointer font-light transition-all group`}
        >
          <svg
            className={`${
              selected === 'Orders' && 'text-white'
            } flex-shrink-0 w-5 h-5 text-cyan-blue transition duration-75 `}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 528 512"
          >
            <path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z" />
          </svg>
          <span className="flex-1 ms-3 whitespace-nowrap">Orders</span>
        </div>
      </li>
      <li>
        <div
          onClick={() => onSelect('Products')}
          className={`${
            selected === 'Products' && 'bg-cyan-blue text-white'
          } flex items-center p-2 text-cyan-blue rounded-lg cursor-pointer font-light transition-all group`}
        >
          <svg
            className={`${
              selected === 'Products' && 'text-white'
            } flex-shrink-0 w-5 h-5 text-cyan-blue transition duration-75 `}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
          </svg>
          <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
        </div>
      </li>
    </>
  );

  const userLinks = (
    <>
      <li>
        <div
          onClick={() => onSelect('My Orders')}
          className={`${
            selected === 'My Orders' && 'bg-cyan-blue text-white'
          } flex items-center p-2 text-cyan-blue rounded-lg cursor-pointer font-light transition-all group`}
        >
          <svg
            className={`${
              selected === 'My Orders' && 'text-white'
            } flex-shrink-0 w-5 h-5 text-cyan-blue transition duration-75 `}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
          </svg>
          <span className="flex-1 ms-3 whitespace-nowrap">My Orders</span>
        </div>
      </li>
    </>
  );
  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-10 w-64 h-screen pt-4 mt-[79px]  border-t border-[#e6e6e6] transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            {role === 'Admin' && adminLinks}
            {role === 'User' && userLinks}
            <li>
              <div
                onClick={() => onSelect('Settings')}
                className={`${
                  selected === 'Settings' && 'bg-cyan-blue text-white'
                } flex items-center p-2 text-cyan-blue rounded-lg cursor-pointer font-light transition-all group`}
              >
                <svg
                  className={`${
                    selected === 'Settings' && 'text-white'
                  } flex-shrink-0 w-5 h-5 text-cyan-blue transition duration-75 `}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill={`${selected === 'Settings' ? 'white' : '#002842'} `}
                >
                  <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
