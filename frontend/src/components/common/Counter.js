import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <form className="max-w-xs mx-auto">
        <div className="relative flex items-center ">
          <button
            type="button"
            id="decrement-button"
            data-input-counter-decrement="quantity-input"
            className="bg-[#f1f5f9] rounded-s-lg p-3 h-12"
            onClick={() => (count > 1 ? setCount(count - 1) : setCount(count))}
          >
            <svg
              className="w-3 h-3 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <p className="bg-[#f1f5f9] h-12 text-center text-sm block w-full py-2.5 outline-0 select-none">
            {count}
          </p>
          <button
            type="button"
            id="increment-button"
            data-input-counter-increment="quantity-input"
            className="bg-[#f1f5f9] rounded-e-lg p-3 h-12 outline-none"
            onClick={() => (count < 10 ? setCount(count + 1) : setCount(count))}
          >
            <svg
              className="w-3 h-3 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
};

export default Counter;
