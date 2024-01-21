import Layout from './Layout';
import { FaChevronRight } from 'react-icons/fa';

const OrderComplete = () => {
  return (
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
            <span className="text-cyan-blue font-medium cursor-pointer">
              Orders
            </span>{' '}
            and Stay Updated on Your Recent Purchase! 📦🔍
          </p>
        </div>
      </Layout>
    </>
  );
};

export default OrderComplete;
