import CartTabItem from './CartTabItem';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartTab = () => {
  const cart = useSelector((state) => state.cartReducer);

  return (
    <>
      <div className="w-[360px] shadow-2xl rounded-lg bg-[#ffffff] animate-fadeOut">
        <p className="font-medium p-4 px-6 border-b border-[#e6e6e6]">Cart</p>
        <div className="p-6">
          {cart &&
            cart.map((item) => (
              <CartTabItem key={item.productId} product={item} />
            ))}
          {cart.length !== 0 ? (
            <div>
              <Link to="/cart">
                <button className="mt-2 w-full h-[36px] py-2 text-[14px] text-cyan-blue bg-[#ffffff] border border-cyan-blue hover:text-[#000000] rounded-md">
                  View Cart
                </button>
              </Link>
              <Link to="/checkout">
                <button className="mt-2 w-full h-[36px] py-2 text-[14px] text-[#ffffff] bg-cyan-blue hover:bg-[#000000] transition rounded-md">
                  Checkout
                </button>
              </Link>
            </div>
          ) : (
            <p className="text-[14px] text-[#767676] font-medium text-center p-10">
              Your cart is empty!
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default CartTab;
