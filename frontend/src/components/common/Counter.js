import React, { useState } from 'react';
import { LuPlus, LuMinus } from 'react-icons/lu';

const Counter = ({ initialValue }) => {
  if (!initialValue) {
    initialValue = 1;
  }
  const [count, setCount] = useState(initialValue);
  return (
    <>
      <form className="max-w-xs w-full mx-auto">
        <div className="relative flex items-center ">
          <button
            type="button"
            id="decrement-button"
            data-input-counter-decrement="quantity-input"
            className="bg-[#f1f5f9] rounded-s-lg p-3 h-12"
            onClick={() => (count > 1 ? setCount(count - 1) : setCount(count))}
          >
            <LuMinus />
          </button>
          <p className="bg-[#f1f5f9] h-12 text-center text-sm block w-full py-2.5 outline-0 select-none flex items-center justify-center">
            {count}
          </p>
          <button
            type="button"
            id="increment-button"
            data-input-counter-increment="quantity-input"
            className="bg-[#f1f5f9] rounded-e-lg p-3 h-12 outline-none"
            onClick={() => (count < 10 ? setCount(count + 1) : setCount(count))}
          >
            <LuPlus />
          </button>
        </div>
      </form>
    </>
  );
};

export default Counter;
