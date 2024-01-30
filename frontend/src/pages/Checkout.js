import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, connect, useDispatch } from 'react-redux';
import Layout from './Layout';
import { FaChevronRight } from 'react-icons/fa';
import Loader from '../utils/Loader';
import { loadProfile } from '../actions/auth';
import PropTypes from 'prop-types';
import axios from 'axios';

// Components
import OrderDetails from '../components/checkout/OrderDetails';
import CheckoutForm from '../components/checkout/CheckoutForm';
import PaymentMethod from '../components/checkout/PaymentMethod';
import { CLEAR_CART } from '../reducers/cartSlice';
import { COMPLETE_ORDER } from '../reducers/orderSlice';

const Checkout = ({ loadProfile }) => {
  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.profileAuth.profile);

  useEffect(() => {
    if (profile) {
      const { _id, user, date, __v, avatar, ...profileWithoutAvatar } = profile;
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...profileWithoutAvatar,
      }));
    }
  }, [profile]);

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

      await axios.post('/api/orders/checkout', body, config);
      dispatch(CLEAR_CART());
      dispatch(COMPLETE_ORDER());
      return navigate('/ordercomplete');
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

Checkout.propTypes = {
  loadProfile: PropTypes.func.isRequired,
};

export default connect(null, { loadProfile })(Checkout);
