import React from 'react';

const PaymentMethod = () => {
  return (
    <>
      <div className="p-5 lg:p-10 mt-5 border border-[#e6e6e6]">
        <div className="flex items-center mb-2">
          <input
            className="mr-2 cursor-pointer"
            type="radio"
            name="paymentmethod"
            id="cash"
          />
          <label className="text-[14px] cursor-pointer" htmlFor="cash">
            Cash on delivery
          </label>
        </div>
        <div className="flex items-center">
          <input
            className="mr-2 cursor-pointer"
            type="radio"
            name="paymentmethod"
            id="card"
          />
          <label className="text-[14px] cursor-pointer" htmlFor="card">
            Card payment
          </label>
        </div>
        <p className="text-[12px] mt-6 mb-2">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
        <div className="flex">
          <input
            className="mr-2 mb-5 cursor-pointer"
            type="checkbox"
            name="terms"
            id="terms"
          />
          <label className="text-[14px] cursor-pointer" htmlFor="terms">
            I have read and agree to the website terms and conditions *
          </label>
        </div>
        <button className="mt-4 text-[14px] mx-auto block bg-cyan-blue text-[#ffffff] shadow-lg w-full h-[48px] rounded-full hover:bg-[#000000] transition">
          Place Order
        </button>
      </div>
    </>
  );
};

export default PaymentMethod;
