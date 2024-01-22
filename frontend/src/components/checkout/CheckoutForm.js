const CheckoutForm = () => {
  return (
    <>
      <div className="lg:max-w-[720px] grow">
        <h1 className="mb-5 text-[24px] sm:text-[32px]">Billing Details</h1>
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
            />
          </div>
        </div>
        <div>
          <label
            className="block text-[12px] mb-2 mt-4"
            htmlFor="streetaddress"
          >
            Street address *
          </label>
          <input
            className="text-[14px] px-4 py-2.5 mb-3 border-2 border-[#000000] rounded-[12px] w-full placeholder:text-[#00000080]"
            type="text"
            name="streetaddress"
            id="streetaddress"
            placeholder="House number and Street name"
          />
          <input
            className="text-[14px] px-4 py-2.5 mb-3 border-2 border-[#000000] rounded-[12px] w-full placeholder:text-[#00000080]"
            type="text"
            name="apartment"
            id="apartment"
            placeholder="Apartment, Suite, unit, etc. (optional)"
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
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
