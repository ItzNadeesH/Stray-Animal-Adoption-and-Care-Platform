import React from 'react';
import { LuPlus, LuMinus } from 'react-icons/lu';

const Counter = ({ value, setValue }) => {
  return (
    <>
      <form className="max-w-xs w-full">
        <div className="relative flex items-center ">
          <button
            type="button"
            id="decrement-button"
            data-input-counter-decrement="quantity-input"
            className="bg-[#f1f5f9] rounded-s-lg p-3 h-12"
            onClick={() => value > 1 && setValue(value - 1)}
          >
            <LuMinus />
          </button>
          <p className="bg-[#f1f5f9] h-12 text-center text-sm block w-full py-2.5 outline-0 select-none flex items-center justify-center">
            {value}
          </p>
          <button
            type="button"
            id="increment-button"
            data-input-counter-increment="quantity-input"
            className="bg-[#f1f5f9] rounded-e-lg p-3 h-12 outline-none"
            onClick={() => value < 10 && setValue(value + 1)}
          >
            <LuPlus />
          </button>
        </div>
      </form>
    </>
  );
};

export default Counter;
