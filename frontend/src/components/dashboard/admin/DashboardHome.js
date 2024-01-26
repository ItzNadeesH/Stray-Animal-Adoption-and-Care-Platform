import React from 'react';
import { FaUsers } from 'react-icons/fa6';

const DashboardHome = () => {
  return (
    <>
      <div className="p-5">
        <h1 className="text-[36px]">Dashboard</h1>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="min-w-[300px] flex items-center justify-between bg-white p-5 mb-5 mx-4 rounded-lg">
            <FaUsers size={32} />
            <p className="mx-8">Current Users</p>
            <p>25</p>
          </div>
          <div className="min-w-[300px] flex items-center justify-between bg-white p-5 mb-5 mx-4 rounded-lg">
            <svg
              className="w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5v-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128h2.2z" />
            </svg>
            <p className="mx-8">Current Products</p>
            <p>25</p>
          </div>
          <div className="min-w-[300px] flex items-center justify-between bg-white p-5 mb-5 mx-4 rounded-lg">
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M64 0C46.3 0 32 14.3 32 32V96c0 17.7 14.3 32 32 32h80v32H87c-31.6 0-58.5 23.1-63.3 54.4L1.1 364.1C.4 368.8 0 373.6 0 378.4V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V378.4c0-4.8-.4-9.6-1.1-14.4L488.2 214.4C483.5 183.1 456.6 160 425 160H208V128h80c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H64zM96 48H256c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16zM64 432c0-8.8 7.2-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm48-168a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm120-24a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM160 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM328 240a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM256 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM424 240a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM352 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48z" />
            </svg>
            <p className="mx-8">Current Orders</p>
            <p>25</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
