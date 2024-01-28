import React from 'react';
import bokdok from '../../../assets/bok-dok.jpg';

const Order = () => {
  return (
    <>
      <div className="py-4 md:mr-[13px]">
        <div className="px-4 pb-4">
          <p className="font-bold text-[24px] md:text-[30px]">Order #54879</p>
          <p className="mt-2 text-[14px] text-[#767676]">
            Order placed <span className="text-black">March 22, 2021</span>
          </p>
        </div>
        <div className="flex flex-wrap sm:items-center p-6 bg-white border border-[#e6e6e6] max-w-[768px]">
          <img
            className="max-w-[250px] max-h-[250px] mx-auto sm:mx-0 sm:w-[135px] sm:h-[135px] rounded-lg"
            src={bokdok}
            alt="bokdok"
          />
          <div className="sm:w-2/3 text-[14px] sm:ml-10">
            <h2 className="text-[16px]">Nomad Tumbler</h2>
            <p className="mt-2">Rs.1500.00</p>
            <p className="mt-3 text-[#767676]">
              This durable and portable insulated tumbler will keep your
              beverage at the perfect temperature during your next adventure.
            </p>
            <div className="flex justify-between mt-6">
              <div className="w-[49%]">
                <p>Delivery address</p>
                <p className="mt-3 text-[#767676]">
                  Floyd Miles 7363 Cynthia Pass Toronto, ON N3Y 4H8
                </p>
              </div>
              <div className="text-center w-[49%]">
                <p>Delivery Status</p>
                <p className="mt-3 text-[#767676]">Pennding</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 bg-white mt-[-1px] border border-[#e6e6e6] max-w-[768px] text-[14px]">
          <div className="flex justify-between mt-6">
            <div className="w-[49%]">
              <p>Billing address</p>
              <p className="mt-3 text-[#767676] w-[180px]">
                Floyd Miles 7363 Cynthia Pass Toronto, ON N3Y 4H8
              </p>
            </div>
            <div className="w-[49%]">
              <p>Payment information</p>
              <p className="mt-3 text-[#767676]">Ending with 4242</p>
              <p className="text-[#767676]">Expires 02 / 24</p>
            </div>
          </div>
          <div className="flex justify-between border-b border-[#e6e6e6] pb-4 mt-8">
            <p>Subtotal</p>
            <p>$72</p>
          </div>
          <div className="flex justify-between border-b border-[#e6e6e6] py-4">
            <p>Shipping</p>
            <p>$72</p>
          </div>
          <div className="flex justify-between pt-4">
            <p>Order total</p>
            <p>$72</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
