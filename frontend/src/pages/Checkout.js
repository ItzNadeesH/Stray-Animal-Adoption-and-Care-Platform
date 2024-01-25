import Layout from './Layout';
import { FaChevronRight } from 'react-icons/fa';
import Loader from '../utils/Loader';

// Components
import OrderDetails from '../components/checkout/OrderDetails';
import CheckoutForm from '../components/checkout/CheckoutForm';
import PaymentMethod from '../components/checkout/PaymentMethod';

const Checkout = () => {
  return (
    <>
      <Loader>
        <Layout>
          <div className="max-w-screen-xl mx-auto px-5">
            <h1 className="flex justify-center items-center text-[24px] sm:text-[36px] my-6">
              Cart
              <FaChevronRight size={16} color="#767676" className="mx-2 mt-1" />
              Checkout
            </h1>
            <div className="lg:flex gap-10">
              <CheckoutForm />
              <div className="lg:mt-[92px] lg:max-w-[480px] mb-8 grow">
                <OrderDetails />
                <PaymentMethod />
              </div>
            </div>
          </div>
        </Layout>
      </Loader>
    </>
  );
};

export default Checkout;
