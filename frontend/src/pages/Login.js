import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import PropTypes from 'prop-types';

// Components
import Alert from '../components/common/Alert';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
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

    const { email, password } = formData;

    login(email, password);
  };

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
          <Alert />
          <form onSubmit={handleSubmit}>
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button className="block py-3 w-full bg-cyan-blue text-[#ffffff] rounded-full hover:bg-[#000000] transition">
              Login
            </button>
          </form>
          <p className="mt-4 text-[14px] text-center">
            Don't have an Account?
            <Link className="ml-2 text-cyan-blue font-medium" to="/signup">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

Login.porpTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.userAuth.isAuthenticated,
});

export default connect(mapStateToProps, { Alert, login })(Login);
