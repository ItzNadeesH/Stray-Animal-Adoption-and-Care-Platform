import React from 'react';
import Layout from './Layout';
import CartItemList from '../components/cart/CartItemList';
import CartCalculator from '../components/cart/CartCalculator';

const Cart = () => {
  return (
    <>
      <Layout>
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-center text-[24px] sm:text-[36px] my-6">Cart</h1>
          <div className="px-4 flex flex-wrap">
            <CartItemList />
            <CartCalculator />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
