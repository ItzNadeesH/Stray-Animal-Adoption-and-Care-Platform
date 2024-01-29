import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from './Layout';
import { FaChevronRight } from 'react-icons/fa';
import Loader from '../utils/Loader';
import axios from 'axios';

// Components
import OrderDetails from '../components/checkout/OrderDetails';
import CheckoutForm from '../components/checkout/CheckoutForm';
import PaymentMethod from '../components/checkout/PaymentMethod';

const Checkout = () => {
  const cart = useSelector((state) => state.cartReducer);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    address: '',
    city: '',
    postcode: '',
    phone: '',
    email: '',
    notes: '',
    products: cart,
    payment: '',
    card: {
      cardnumber: '',
      expiredate: '',
      cvv: '',
    },
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = formData;

      const res = await axios.post('/api/orders/checkout', body, config);

      console.log(res.data.msg);
    } catch (error) {
      setError(error.response.data.msg);
    }
  };

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
              <CheckoutForm
                data={formData}
                setData={setFormData}
                error={error}
                setError={setError}
              />
              <div className="lg:mt-[92px] lg:max-w-[480px] mb-8 grow">
                <OrderDetails />
                <PaymentMethod
                  data={formData}
                  setData={setFormData}
                  onSubmit={handleSubmit}
                />
              </div>
            </div>
          </div>
        </Layout>
      </Loader>
    </>
  );
};

export default Checkout;
