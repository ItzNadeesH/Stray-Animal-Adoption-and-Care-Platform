import React from 'react';

const CheckoutForm = ({ data, setData, error, setError }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="lg:max-w-[720px] grow">
        <h1 className="mb-5 text-[24px] sm:text-[32px]">Billing Details</h1>
        <form>
          {error && (
            <div
              className="mb-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <button onClick={() => setError(null)}>
                  <svg
                    className="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </button>
              </span>
            </div>
          )}
          <div className="lg:flex flex-wrap">
            <div className="grow lg:mr-5">
              <label className="block text-[12px] mb-2" htmlFor="firstname">
                First Name *
              </label>
              <input
                className="text-[14px] px-4 py-2.5 mb-3 border-2 border-[#000000] rounded-[12px] w-full placeholder:text-[#00000080]"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                onChange={handleChange}
                value={data.firstname}
              />
            </div>
            <div className="grow">
              <label className="block text-[12px] mb-2" htmlFor="lastname">
                Last Name *
              </label>
              <input
                className="text-[14px] px-4 py-2.5 mb-3 border-2 border-[#000000] rounded-[12px] w-full placeholder:text-[#00000080]"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          </div>
          <div>
            <label className="block text-[12px] mb-2 mt-4" htmlFor="address">
              Street address *
            </label>
            <input
              className="text-[14px] px-4 py-2.5 mb-3 border-2 border-[#000000] rounded-[12px] w-full placeholder:text-[#00000080]"
              type="text"
              name="address"
              id="address"
              placeholder="House number and Street name"
              onChange={handleChange}
              value={data.address}
            />
          </div>
          <div>
            <label className="block text-[12px] mb-2" htmlFor="city">
              Town / City *
            </label>
            <input
              className="text-[14px] px-4 py-2.5 mb-3 border-2 border-[#000000] rounded-[12px] w-full placeholder:text-[#00000080]"
              type="text"
              name="city"
              id="city"
              onChange={handleChange}
              value={data.city}
            />
          </div>
          <div>
            <label className="block text-[12px] mb-2" htmlFor="postcode">
              Postcode / ZIP *
            </label>
            <input
              className="text-[14px] px-4 py-2.5 mb-3 border-2 border-[#000000] rounded-[12px] w-full placeholder:text-[#00000080]"
              type="text"
              name="postcode"
              id="postcode"
              onChange={handleChange}
              value={data.postcode}
            />
          </div>
          <div>
            <label className="block text-[12px] mb-2" htmlFor="phone">
              Phone *
            </label>
            <input
              className="text-[14px] px-4 py-2.5 mb-3 border-2 border-[#000000] rounded-[12px] w-full placeholder:text-[#00000080]"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone"
              onChange={handleChange}
              value={data.phone}
            />
          </div>
          <div>
            <label className="block text-[12px] mb-2" htmlFor="email">
              Email Address *
            </label>
            <input
              className="text-[14px] px-4 py-2.5 mb-3 border-2 border-[#000000] rounded-[12px] w-full placeholder:text-[#00000080]"
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              onChange={handleChange}
              value={data.email}
            />
          </div>
          <div>
            <label className="block text-[12px] mb-2 mt-4" htmlFor="notes">
              Order Notes (optional)
            </label>
            <textarea
              className="text-[14px] px-4 py-2.5 mb-3 h-[64px] border-2 border-[#000000] rounded-[12px] w-full placeholder:text-[#00000080]"
              name="notes"
              id="notes"
              placeholder="Notes about your order, e.g. special notes for delivery."
              cols="30"
              rows="10"
              onChange={handleChange}
              value={data.notes}
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
};

export default CheckoutForm;
