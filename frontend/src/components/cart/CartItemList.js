import React from 'react';
import CartItem from './CartItem';
import bokdok from '../../assets/bok-dok.jpg';

const CartItemList = () => {
  const items = [
    {
      id: 1,
      image: bokdok,
      title: 'Bokdok',
      price: 1200,
      quantity: 2,
    },
    {
      id: 2,
      image: bokdok,
      title: 'Bokdok',
      price: 1200,
      quantity: 5,
    },
  ];
  return (
    <>
      <h1 className="text-[32px]">Your Cart</h1>
      <div className="max-w-[720px] border-t border-[#e6e6e6] mt-4">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default CartItemList;
