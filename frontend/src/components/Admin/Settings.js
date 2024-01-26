import React from 'react';
import avatar from '../../assets/icons/image-avatar.png';

const Settings = () => {
  return (
    <>
      <div className="max-w-screen-full bg-[#f6f6f6] p-2">
        <div className="p-5 bg-white rounded-lg shadow-lg">
          <p className="mb-2">Edit Profile</p>
          <form className="flex flex-wrap justify-between">
            <div className="p-5 border border-[#e6e6e6] rounded-md mb-4 xl:mb-0 w-full xl:w-[49%]">
              <div className="flex flex-col sm:flex-row sm:items-center mb-5">
                <img
                  className="block w-[100px] h-[100px]"
                  src={avatar}
                  alt="avatar"
                />
                <div className="sm:ml-8">
                  <p>Bonnie Green</p>
                  <p>Bonnie@flowbite.com</p>
                  <button className="mt-1 h-8 px-6 text-[12px] text-white bg-cyan-blue rounded-md hover:bg-black transition-all">
                    Change Picture
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <label className="block text-[12px] mb-2" htmlFor="firstname">
                  First Name
                </label>
                <input
                  className="text-[14px] px-4 py-2.5 h-[40px] border border-[#000000] rounded-md w-full placeholder:text-[#00000080] outline-0"
                  type="text"
                  name="firstname"
                  id="firstname"
                />
              </div>
              <div className="mb-3">
                <label className="block text-[12px] mb-2" htmlFor="lastname">
                  Last Name
                </label>
                <input
                  className="text-[14px] px-4 py-2.5 h-[40px] border border-[#000000] rounded-md w-full placeholder:text-[#00000080] outline-0"
                  type="text"
                  name="lastname"
                  id="lastname"
                />
              </div>
              <div className="mb-3">
                <label className="block text-[12px] mb-2" htmlFor="address">
                  Street address
                </label>
                <input
                  className="text-[14px] px-4 py-2.5 h-[40px] border border-[#000000] rounded-md w-full placeholder:text-[#00000080] outline-0"
                  type="text"
                  name="address"
                  id="address"
                />
              </div>
              <div className="mb-3">
                <label className="block text-[12px] mb-2" htmlFor="town">
                  Town / City
                </label>
                <input
                  className="text-[14px] px-4 py-2.5 h-[40px] border border-[#000000] rounded-md w-full placeholder:text-[#00000080] outline-0"
                  type="text"
                  name="town"
                  id="town"
                />
              </div>
              <div className="mb-3">
                <label className="block text-[12px] mb-2" htmlFor="postcode">
                  Postcode / ZIP
                </label>
                <input
                  className="text-[14px] px-4 py-2.5 h-[40px] border border-[#000000] rounded-md w-full placeholder:text-[#00000080] outline-0"
                  type="text"
                  name="postcode"
                  id="postcode"
                />
              </div>
              <div className="mb-3">
                <label className="block text-[12px] mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="text-[14px] px-4 py-2.5 h-[40px] border border-[#000000] rounded-md w-full placeholder:text-[#00000080] outline-0"
                  type="tel"
                  name="phone"
                  id="phone"
                />
              </div>
              <div className="flex w-full justify-end">
                <button className="mt-3 h-8 px-6 text-[12px] text-white bg-cyan-blue rounded-md hover:bg-black transition-all">
                  Save
                </button>
              </div>
            </div>
            <div className="w-full xl:w-[49%]">
              <div className="p-5 border border-[#e6e6e6] rounded-md">
                <div className="mb-3">
                  <label
                    className="block text-[12px] mb-2"
                    htmlFor="currentpassword"
                  >
                    Current Password
                  </label>
                  <input
                    className="text-[14px] px-4 py-2.5 h-[40px] border border-[#000000] rounded-md w-full placeholder:text-[#00000080] outline-0"
                    type="password"
                    name="currentpassword"
                    id="currentpassword"
                  />
                </div>
                <div className="mb-3">
                  <label
                    className="block text-[12px] mb-2"
                    htmlFor="newpassword"
                  >
                    New Password
                  </label>
                  <input
                    className="text-[14px] px-4 py-2.5 h-[40px] border border-[#000000] rounded-md w-full placeholder:text-[#00000080] outline-0"
                    type="password"
                    name="newpassword"
                    id="newpassword"
                  />
                </div>
                <div className="mb-3">
                  <label
                    className="block text-[12px] mb-2"
                    htmlFor="confirmpassword"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="text-[14px] px-4 py-2.5 h-[40px] border border-[#000000] rounded-md w-full placeholder:text-[#00000080] outline-0"
                    type="password"
                    name="confirmpassword"
                    id="confirmpassword"
                  />
                </div>
                <div className="flex w-full justify-end">
                  <button className="mt-3 h-8 px-6 text-[12px] text-white bg-cyan-blue rounded-md hover:bg-black transition-all">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Settings;
