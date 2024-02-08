import React from 'react';
import { format } from 'date-fns';
import OrderDetails from './OrderDetails';

const Order = ({ order }) => {
  const formattedDate = format(new Date(order.date), 'MMMM d, yyyy');
  const { products } = order;
  const total = products.reduce(
    (accumulator, item) => accumulator + item.quantity * item.price,
    0
  );

  return (
    <>
      <div className="py-4 md:mr-[13px]">
        <div className="pb-4">
          <p className="font-bold text-[24px] md:text-[30px]">
            Order#{parseInt(order._id.substr(-5).toUpperCase(), 16)}
          </p>
          <p className="mt-2 text-[14px] text-[#767676]">
            Order placed <span className="text-black">{formattedDate}</span>
          </p>
        </div>
        {products &&
          products.map((item) => (
            <OrderDetails key={item._id} product={item} />
          ))}
        <div className="p-5 bg-white mt-[-1px] border border-[#e6e6e6] max-w-[768px] text-[14px]">
          <div className="flex justify-between mt-6">
            <div className="w-[33%]">
              <p>Delivery address</p>
              <p className="mt-3 text-[#767676] sm:w-[180px]">
                {order.address}
              </p>
            </div>
            <div className="w-[33%]">
              <p>Payment information</p>
              {order.payment === 'card' ? (
                <>
                  <p className="mt-3 text-[#767676]">
                    Ending with {order.card.cardnumber.substr(-4)}
                  </p>
                  <p className="text-[#767676]">
                    Expires {order.card.expiredate}
                  </p>
                </>
              ) : (
                <p className="mt-3 text-[#767676]">Cash on delivery</p>
              )}
            </div>
            <div className="w-[33%] text-center">
              <p>Delivery Status</p>
              <p className="mt-3 text-[#767676]">{order.status}</p>
            </div>
          </div>
          <div className="flex justify-between border-b border-[#e6e6e6] pb-4 mt-8">
            <p>Subtotal</p>
            <p>Rs.{total}.00</p>
          </div>
          <div className="flex justify-between border-b border-[#e6e6e6] py-4">
            <p>Shipping</p>
            <p>Rs.650.00</p>
          </div>
          <div className="flex justify-between pt-4">
            <p>Order total</p>
            <p>Rs.{total + 650}.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
