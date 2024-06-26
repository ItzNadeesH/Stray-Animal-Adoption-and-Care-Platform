import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import PropTypes from 'prop-types';
import CartTab from './CartTab';
import ProfileDropdown from './ProfileDropdown';

// Icons
import { FaHome, FaInfoCircle, FaStore } from 'react-icons/fa';
import { IoMdContacts } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import menu from '../../assets/icons/icon-menu.svg';
import HoverDropdown from '../common/HoverDropdown';
import { useUser } from '../../contexts/UserContext';

const Navbar = ({ isAuthenticated }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setisProfileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const cartRef = useRef(null);
  const navigate = useNavigate();

const {user} = useUser();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        !event.target.closest('button')
      ) {
        setIsMenuOpen(false);
      }
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        !event.target.closest('button')
      ) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [navbarRef, cartRef]);

  const handleProfileClick = () => {
    setIsCartOpen(false);
    setisProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleCartClick = () => {
    setisProfileMenuOpen(false);
    setIsCartOpen(!isCartOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e) => {
    setIsMenuOpen(!isMenuOpen);
    setTimeout(() => navigate(e.target.getAttribute('to')), 200);
  };

  const authLinks = (
    <div className="flex items-center relative">
      <button className="mx-10" onClick={handleCartClick} ref={cartRef}>
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#000000"
          />
        </svg>
      </button>
      <div className="absolute top-10 right-[-24px] z-10">
        {isCartOpen && <CartTab />}
      </div>
      <button onClick={handleProfileClick} className="">
        <FaUserCircle color="#000000" size={26} />
      </button>
      <div className="absolute top-6 right-[-24px] z-10">
        {isProfileMenuOpen && <ProfileDropdown />}
      </div>
    </div>
  );
  const guestLinks = (
    <div className="flex items-center text-[14px] transition-all">
      <Link className="hover:text-cyan-blue" to="/login">
        Sign in
      </Link>
      <div className="mx-4 border-r border-[#e6e6e6] h-5"></div>
      <Link className="hover:text-cyan-blue" to="/signup">
        Create account
      </Link>
    </div>
  );
  
  return (
    <>
      <nav className="flex justify-between p-6 h-[80px] border-b border-[#e6e6e6] max-w-screen-xl mx-auto">
        <div className="flex items-center">
          <button onClick={handleMenuClick} className="md:hidden mr-6">
            <img className="h-5" src={menu} alt="menu-icon" />
          </button>
          <Link to="/">
            <h1 className="inline-block text-[28px]">AWPA</h1>
          </Link>
          <ul className="ml-[56px] hidden md:flex">
            <li className="mx-4">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="mx-4">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="mx-4">
              <HoverDropdown />
            </li>
          </ul>
        </div>
        {isAuthenticated
          ? authLinks
          : isAuthenticated === false
          ? guestLinks
          : ''}
 
      </nav>
      {/* Mobile Navbar */}
      <nav
        ref={navbarRef}
        className={`absolute bg-[#ffffff] top-0 bottom-0 w-[320px] shadow-2xl transition-all z-10 ${
          isMenuOpen ? 'left-0' : 'left-[-320px]'
        }`}
      >
        <h2 className="text-[32px] mt-[80px] ml-10 mb-8 pb-4 border-b border-[#e6e6e6]">
          Welcome
        </h2>
        <ul className="text-[18px] ml-10">
          <li className="mb-6">
            <button
              onClick={handleLinkClick}
              className="inline-flex items-center"
              to="/"
            >
              <FaHome size={24} className="mr-4" />
              Home
            </button>
          </li>
          <li className="mb-6">
            <button
              onClick={handleLinkClick}
              className="inline-flex items-center"
              to="/about"
            >
              <FaInfoCircle className="mr-4" />
              About Us
            </button>
          </li>
          <li className="mb-6">
            <button
              onClick={handleLinkClick}
              className="inline-flex items-center"
              to="/contact"
            >
              <IoMdContacts className="mr-4" />
              Contact
            </button>
          </li>
          <li className="mb-6">
            <button
              onClick={handleLinkClick}
              className="inline-flex items-center"
              to="/store"
            >
              <FaStore className="mr-4" />
              Store
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.userAuth.isAuthenticated,
});

export default connect(mapStateToProps)(Navbar);
