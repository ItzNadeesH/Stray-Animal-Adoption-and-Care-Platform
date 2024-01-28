import React, { useState } from 'react';
import CreditCardForm from '../common/CreditCardForm';

const PaymentMethod = ({ data, setData, onSubmit }) => {
  const [agree, setAgree] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === 'cash') {
      setData({ ...data, payment: 'cash' });
    }
    if (event.target.value === 'card') {
      setData({ ...data, payment: 'card' });
    }
  };
  return (
    <>
      <div className="p-5 lg:p-10 mt-5 border border-[#e6e6e6]">
        <div>
          <div className="flex items-center mb-2">
            <input
              className="mr-2 cursor-pointer"
              type="radio"
              name="paymentmethod"
              id="cash"
              value="cash"
              checked={selectedOption === 'cash'}
              onChange={handleRadioChange}
              required
            />
            <label className="text-[14px] cursor-pointer" htmlFor="cash">
              Cash on delivery
            </label>
          </div>
          <div
            className={`mb-3 bg-[#e5eeff] h-0 overflow-hidden transition-all rounded-sm ${
              selectedOption === 'cash' && 'h-10'
            }`}
          >
            <p className="p-3 text-[12px]">Pay with cash upon delivery.</p>
          </div>
          <div className="flex items-center">
            <input
              className="mr-2 cursor-pointer"
              type="radio"
              name="paymentmethod"
              id="card"
              value="card"
              checked={selectedOption === 'card'}
              onChange={handleRadioChange}
              required
            />
            <label className="text-[14px] cursor-pointer" htmlFor="card">
              Card payment
            </label>
          </div>
          <div
            className={`my-3 h-0 overflow-hidden transition-all rounded-sm ${
              selectedOption === 'card' && 'h-[104px]'
            }`}
          >
            <CreditCardForm data={data} setData={setData} />
          </div>
          <p className="text-[12px] my-2">
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
              onClick={() => setAgree(!agree)}
              required
            />
            <label className="text-[14px] cursor-pointer" htmlFor="terms">
              I have read and agree to the website terms and conditions *
            </label>
          </div>
          <button
            disabled={agree}
            onClick={onSubmit}
            className="mt-4 text-[14px] mx-auto block bg-cyan-blue text-[#ffffff] shadow-lg w-full h-[48px] rounded-full hover:bg-[#000000] transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
