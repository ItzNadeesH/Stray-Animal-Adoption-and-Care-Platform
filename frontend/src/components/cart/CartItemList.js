import { useState } from 'react';
import CartItem from './CartItem';
import Cookies from 'js-cookie';

const CartItemList = () => {
  const [cartItems] = useState(
    Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : []
  );

  return (
    <>
      <div className="max-w-[720px] w-[480px] mx-auto grow">
        <h1 className="text-[32px]">Your Cart</h1>
        <div className="border-t border-[#e6e6e6] mt-4">
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CartItemList;
