import { Link } from 'react-router-dom';
import Loader from '../utils/Loader';
import Layout from './Layout';
import { FaChevronRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const OrderComplete = () => {
  const order = useSelector((state) => state.orderReducer);
  const { isOrderComplete } = order;

  return isOrderComplete ? (
    <>
      <Layout>
        <div className="max-w-screen-xl mx-auto px-5">
          <h2 className="flex justify-center items-center text-[20px] s:text-[24px] md:text-[36px] my-6">
            Cart
            <FaChevronRight size={16} color="#767676" className="mx-2 mt-1" />
            Checkout
            <FaChevronRight size={16} color="#767676" className="mx-2 mt-1" />
            Order Complete
          </h2>
          <h1 className="mx-auto mt-[100px] text-cyan-blue max-w-[600px] text-center text-[24px] sm:text-[42px] border-b border-[#e6e6e6] pb-6">
            Thank You for Your Purchase! Your Order Has Been Successfully
            Placed. <span> 🛒🎉</span>
          </h1>
          <p className="mt-5 text-[14px] text-center">
            Track Your Order - Head Back to{' '}
            <Link
              to="/dashboard"
              className="text-cyan-blue font-medium cursor-pointer"
            >
              My Orders
            </Link>{' '}
            and Stay Updated on Your Recent Purchase! 📦🔍
          </p>
        </div>
      </Layout>
    </>
  ) : (
    <>
      <Navigate to="/" />
    </>
  );
};

export default OrderComplete;
