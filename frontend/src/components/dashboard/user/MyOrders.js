import React from 'react';
import Order from './Order';
import { useOrders } from '../../../hooks/useOrders';
import { useSelector } from 'react-redux';

const MyOrders = () => {
  const user = useSelector((state) => state.userAuth.user._id);
  const { data } = useOrders(user);
  return (
    <>
      <div className="max-w-screen-full">
        <div>
          <Order />
          <Order />
        </div>
      </div>
    </>
  );
};

export default MyOrders;
