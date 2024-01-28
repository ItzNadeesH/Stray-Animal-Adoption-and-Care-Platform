import React from 'react';

const CreditCardForm = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({
      ...data,
      card: { ...data.card, [e.target.name]: e.target.value },
    });
  };
  return (
    <>
      <div className="max-w-sm mx-auto">
        <label htmlFor="card-number-input" className="sr-only">
          Card number:
        </label>
        <div className="relative">
          <input
            type="text"
            name="cardnumber"
            id="card-number-input"
            className="border-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-[#00000080] outline-0"
            placeholder="4242 4242 4242 4242"
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 my-4">
          <div className="relative max-w-sm col-span-2">
            <div className="absolute inset-y-0 end-4 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <label htmlFor="card-expiration-input" className="sr-only">
              Card expiration date:
            </label>
            <input
              id="card-expiration-input"
              name="expiredate"
              type="text"
              className="border-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-[#00000080] outline-0"
              placeholder="12/23"
              maxLength={5}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="cvv-input" className="sr-only">
              Card CVV code:
            </label>
            <input
              type="text"
              id="cvv-input"
              name="cvv"
              aria-describedby="helper-text-explanation"
              className="border-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-[#00000080] outline-0"
              placeholder="CVV"
              maxLength={3}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditCardForm;
