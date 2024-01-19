import React, { useEffect, useRef, useState } from 'react';
import menu from '../../assets/icons/icon-menu.svg';
import avatar from '../../assets/icons/image-avatar.png';
import CartTab from './CartTab';
import { FaHome, FaInfoCircle, FaStore } from 'react-icons/fa';
import { IoMdContacts } from 'react-icons/io';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const cartRef = useRef(null);

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

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between p-6 pb-8 border-b border-[#e6e6e6] max-w-screen-xl mx-auto mb-4">
        <div className="flex items-center">
          <button onClick={handleMenuClick} className="md:hidden mr-6">
            <img className="h-5" src={menu} alt="menu-icon" />
          </button>
          <h1 className="inline-block">LOGO</h1>
          <ul className="ml-[56px] hidden md:flex">
            <li className="mx-4">
              <a href="#!">Home</a>
            </li>
            <li className="mx-4">
              <a href="#!">About Us</a>
            </li>
            <li className="mx-4">
              <a href="#!">Contact</a>
            </li>
            <li className="mx-4">
              <a href="#!">Store</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center relative">
            <button className="mx-10" onClick={handleCartClick} ref={cartRef}>
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#000000"
                />
              </svg>
            </button>
            <div className="absolute top-10 right-[-36px] z-10">
              {isCartOpen && <CartTab />}
            </div>
            <button className="w-8">
              <img src={avatar} alt="avatar" />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Navbar */}
      <nav
        ref={navbarRef}
        className={`absolute bg-[#ffffff] top-0 bottom-0 w-[320px] shadow-2xl transition-all ${
          isMenuOpen ? 'left-0' : 'left-[-320px]'
        }`}
      >
        <h2 className="text-[32px] mt-[80px] ml-10 mb-8 pb-4 border-b border-[#e6e6e6]">
          Welcome
        </h2>
        <ul className="text-[18px] ml-10">
          <li className="mb-6">
            <a className="inline-flex" href="#!">
              <FaHome size={24} className="mr-4" />
              Home
            </a>
          </li>
          <li className="mb-6">
            <a className="inline-flex items-center" href="#!">
              <FaInfoCircle className="mr-4" />
              About Us
            </a>
          </li>
          <li className="mb-6">
            <a className="inline-flex items-center" href="#!">
              <IoMdContacts className="mr-4" />
              Contact
            </a>
          </li>
          <li className="mb-6">
            <a className="inline-flex items-center" href="#!">
              <FaStore className="mr-4" />
              Store
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
