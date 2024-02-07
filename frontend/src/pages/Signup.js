import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

const Signup = ({ isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      return navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = formData;

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ username, email, password });

    try {
      await axios.post('/api/users', body, config);
      return navigate('/login');
    } catch (error) {
      setError(error.response.data.errors[0].msg);
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
            {error && (
              <div
                className="mb-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline">{error}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <button onClick={() => setError(null)}>
                    <svg
                      className="fill-current h-6 w-6 text-red-500"
                      role="button"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <title>Close</title>
                      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                  </button>
                </span>
              </div>
            )}
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
                autoComplete="name"
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

Signup.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.userAuth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Signup);
