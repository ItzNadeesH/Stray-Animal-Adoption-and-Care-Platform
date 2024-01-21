import React from 'react';

const CartCalculator = () => {
  return (
    <>
      <div className="w-[480px] mx-auto p-10 border border-[#e6e6e6] mt-[64px]">
        <h2 className="text-[24px] sm:text-[32px]">Cart Totals</h2>
        <div className="flex justify-between py-5 border-b border-[#e6e6e6]">
          <p className="font-medium text-[14px]">Subtotal</p>
          <p className="font-medium text-[14px]">990LKR</p>
        </div>
        <div className="flex justify-between py-5 border-b border-[#e6e6e6]">
          <p className="font-medium text-[14px]">Shipping</p>
          <p className="font-medium text-[14px]">330LKR</p>
        </div>
        <div className="flex justify-between py-5 ">
          <p className="font-medium text-[14px]">Total</p>
          <p className="font-medium text-[14px]">1500LKR</p>
        </div>
        <button className="mt-4 text-[14px] mx-auto block bg-cyan-blue text-[#ffffff] shadow-lg w-full h-[48px] rounded-full hover:bg-[#000000] transition">
          Proceed to Checkout
        </button>
      </div>
    </>
  );
};

export default CartCalculator;
