import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../../utils/Loader';

const CartCalculator = () => {
  const cart = useSelector((state) => state.cartReducer);
  const total = cart.reduce(
    (accumulator, item) => accumulator + item.quantity * item.price,
    0
  );

  return (
    <>
      {!cart && <Loader />}
      <div className="w-[480px] mx-auto p-10 border border-[#e6e6e6] mt-[64px]">
        <h2 className="text-[24px] sm:text-[32px]">Cart Totals</h2>
        <div className="flex justify-between py-5 border-b border-[#e6e6e6]">
          <p className="font-medium text-[14px]">Subtotal</p>
          <p className="font-medium text-[14px]">{total}.00LKR</p>
        </div>
        <div className="flex justify-between py-5 border-b border-[#e6e6e6]">
          <p className="font-medium text-[14px]">Shipping</p>
          <p className="font-medium text-[14px]">650.00LKR</p>
        </div>
        <div className="flex justify-between py-5 ">
          <p className="font-medium text-[14px]">Total</p>
          <p className="font-medium text-[14px]">{total + 650}.00LKR</p>
        </div>
        <Link to="/checkout">
          <button className="mt-4 text-[14px] mx-auto block bg-cyan-blue text-[#ffffff] shadow-lg w-full h-[48px] rounded-full hover:bg-[#000000] transition">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </>
  );
};

export default CartCalculator;
