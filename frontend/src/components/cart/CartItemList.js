import { useState } from 'react';
import CartItem from './CartItem';
import Cookies from 'js-cookie';

const CartItemList = () => {
  const [cartItems, setCartItems] = useState(
    Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : []
  );

  const handleRemove = (id) => {
    const newCart = cartItems.filter((item) => id !== item.productId);
    setCartItems(newCart);
  };

  return (
    <>
      <div className="max-w-[720px] w-[480px] mx-auto grow">
        <h1 className="text-[32px]">Your Cart</h1>
        <div className="border-t border-[#e6e6e6] mt-4">
          {cartItems &&
            cartItems.map((item) => (
              <CartItem
                key={item.productId}
                item={item}
                onDelete={handleRemove}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default CartItemList;
