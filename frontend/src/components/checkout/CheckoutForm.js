import React from 'react';

const CheckoutForm = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="lg:max-w-[720px] grow">
        <h1 className="mb-5 text-[24px] sm:text-[32px]">Billing Details</h1>
        <form>
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
