import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { username, email, password } = formData;

    const body = JSON.stringify({ username, email, password });

    try {
      const res = await axios.post('/api/users', body, config);
      console.log(res.data);
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach((error) => console.log(error.msg));
      }
    }
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="my-4 text-[34px] text-center md:text-[45px] lg:text-[56px]">
          My Account
        </h1>
        <div className="max-w-[455px] mx-auto mt-8 px-5">
          <h4 className="mb-2 text-center text-[20px] lg:text-[24px]">
            Create Account
          </h4>
          <p className="mb-4 text-center text-[12px]">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                className="block mb-2 text-[14px] font-bold"
                htmlFor="username"
              >
                Username *
              </label>
              <input
                className="w-full mb-7 py-[12px] px-[15px] rounded-[12px] outline-0 border-2 border-cyan-blue active:border-black placeholder:text-[14px]"
                type="text"
                placeholder="Username"
                autoComplete="username"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block mb-2 text-[14px] font-bold"
                htmlFor="email"
              >
                Email *
              </label>
              <input
                className="w-full mb-7 py-[12px] px-[15px] rounded-[12px] outline-0 border-2 border-cyan-blue active:border-[#000000] placeholder:text-[14px]"
                type="email"
                placeholder="Email address"
                autoComplete="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block mb-2 text-[14px] font-bold"
                htmlFor="password"
              >
                Password *
              </label>
              <input
                className="w-full mb-7 py-[12px] px-[15px] rounded-[12px] outline-0 border-2 border-cyan-blue active:border-black placeholder:text-[14px]"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button className="block py-3 w-full bg-cyan-blue text-[#ffffff] rounded-full hover:bg-[#000000] transition">
              Create Account
            </button>
          </form>
          <p className="mt-4 text-[14px] text-center">
            Already have an Account?
            <Link className="ml-2 text-cyan-blue font-medium" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
