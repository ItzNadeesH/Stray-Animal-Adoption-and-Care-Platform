import React from 'react';
import Order from './Order';

const MyOrders = () => {
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
