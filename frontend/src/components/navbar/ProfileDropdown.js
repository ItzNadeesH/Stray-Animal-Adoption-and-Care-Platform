import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../actions/auth';
import { connect, useSelector } from 'react-redux';
import { loadUser } from '../../actions/auth';
import PropTypes from 'prop-types';
import store from '../../store';
import setAuthToken from '../../utils/setAuthToken';

const ProfileDropdown = ({ logout }) => {
  const { username, email } = useSelector((state) => state.userAuth.user);
  const navigate = useNavigate();
  const handleSignout = () => {
    logout();
    setAuthToken();
    store.dispatch(loadUser());
    return navigate('/');
  };
  return (
    <>
      <div
        className="min-w-[180px] z-50 my-4 text-base list-none bg-white divide-y divide-[#e6e6e6] rounded-lg shadow animate-fadeOut"
        id="user-dropdown"
      >
        <div className="px-4 py-3 select-none">
          <span className="block text-sm">{username}</span>
          <span className="block text-xs truncate">{email}</span>
        </div>
        <ul className="py-2 " aria-labelledby="user-menu-button">
          <li>
            <Link
              to="/dashboard"
              className="block px-4 py-2 text-sm transition-all hover:bg-cyan-blue text-black hover:text-white"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-sm transition-all hover:bg-cyan-blue text-black hover:text-white"
            >
              Settings
            </Link>
          </li>
          <li>
            <button
              onClick={handleSignout}
              className="block w-full text-left px-4 py-2 text-sm transition-all hover:bg-cyan-blue text-black hover:text-white"
            >
              Sign out
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

ProfileDropdown.porpTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(ProfileDropdown);
