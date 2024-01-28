import React from 'react';
import { useSelector } from 'react-redux';
import OrderDetailsRow from './OrderDetailsRow';

const OrderDetails = () => {
  const cart = useSelector((state) => state.cartReducer);
  const total = cart.reduce(
    (accumulator, item) => accumulator + item.quantity * item.price,
    0
  );
  return (
    <>
      <div className="p-5 lg:p-10 lg:pb-2  border border-[#e6e6e6]">
        <h2 className="text-[24px]">Your Order</h2>
        <p className="text-[14px] font-medium mt-3 pb-6 border-b border-[#e6e6e6]">
          Product
        </p>
        {cart &&
          cart.map((item) => (
            <OrderDetailsRow key={item.productId} product={item} />
          ))}

        <div className="text-[14px] flex justify-between items-center py-2 border-b border-[#e6e6e6]">
          <p className="font-medium my-2">Shipping</p>
          <p>Rs.650.00</p>
        </div>
        <div className="text-[14px] flex justify-between items-center py-2">
          <p className="font-medium my-2">Total</p>
          <p>Rs.{total + 650}.00</p>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
