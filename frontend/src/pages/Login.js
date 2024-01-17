import React from 'react';

const Login = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="my-4 text-[34px] text-center md:text-[45px] lg:text-[56px]">
          My Account
        </h1>
        <div className="max-w-[455px] mx-auto mt-8 px-5">
          <h4 className="mb-2 text-center text-[20px] lg:text-[24px]">
            Welcome Back
          </h4>
          <p className="mb-4 text-center text-[14px]">
            Please enter your credentials to access your account.
          </p>
          <form>
            <div>
              <label
                className="block mb-2 text-[14px] font-bold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full mb-7 py-[12px] px-[15px] rounded-[12px] outline-0 border-2 border-cyan-blue active:border-[#000000] placeholder:text-[14px]"
                type="email"
                placeholder="Email address"
                autoComplete="email"
                name="email"
                id="email"
              />
            </div>
            <div>
              <label
                className="block mb-2 text-[14px] font-bold"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full mb-7 py-[12px] px-[15px] rounded-[12px] outline-0 border-2 border-cyan-blue active:border-black placeholder:text-[14px]"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                minLength={6}
              />
            </div>
            <button className="block py-3 w-full bg-cyan-blue text-[#ffffff] rounded-full hover:bg-[#000000] transition">
              Login
            </button>
          </form>
          <p className="mt-4 text-[14px] text-center">
            Don't have an Account
            <a className="ml-2 text-cyan-blue font-medium" href="#">
              Signup
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
