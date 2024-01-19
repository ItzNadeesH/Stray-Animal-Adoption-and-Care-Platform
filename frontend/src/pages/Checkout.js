import Layout from './Layout';
import OrderDetails from '../components/checkout/OrderDetails';
import { FaChevronRight } from 'react-icons/fa';
import CheckoutForm from '../components/checkout/CheckoutForm';

const Checkout = () => {
  return (
    <>
      <Layout>
        <div className="max-w-screen-xl mx-auto px-5">
          <h1 className="flex justify-center items-center text-[24px] sm:text-[36px] my-6">
            Cart
            <FaChevronRight size={16} color="#767676" className="mx-2 mt-1" />
            Checkout
          </h1>
          <div className="lg:flex gap-10">
            <CheckoutForm />
            <div className="lg:mt-[92px] lg:max-w-[480px] grow">
              <OrderDetails />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Checkout;
