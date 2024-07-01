import Cart from '../../assets/icons/icon-cart.svg';
import { useProduct } from '../../hooks/useProduct';
import Counter from '../common/Counter';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART } from '../../reducers/cartSlice';
import { useState } from 'react';
import SuccessMessage from '../common/SuccessMessage';
import Loader from '../../utils/Loader';

const ProductPreview = () => {
  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const { data } = useProduct(productId);
  const [value, setValue] = useState(1);
  const [active, setActive] = useState(false);

  return (
    <>
      {!data && (
        <div className="mt-[-80px]">
          <Loader />
        </div>
      )}
      {data && (
        <div className="flex flex-wrap items-center max-w-screen-lg mx-auto justify-around mt-[80px]">
          <div className="max-w-[400px]">
            <img className="md:rounded-2xl" src={data.image} alt="bokdok" />
          </div>
          <div className="px-5 py-6 md:max-w-[500px]">
            <p className="uppercase text-[14px] font-medium">
              {data.manufacturer}
            </p>
            <h1 className="mb-4 text-[36px] text-cyan-blue">{data.name}</h1>
            <p className="mb-6 text-[#767676] text-[14px]">
              {data.description}
            </p>
            <h2 className="mb-4 text-[24px] tracking-wide">
              Rs.{data.price}.00
            </h2>
            <div className="flex justify-center">
              <Counter value={value} setValue={setValue} />
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  if (!isAuthenticated) {
                    return navigate('/login');
                  } else {
                    dispatch(
                      ADD_TO_CART({ productId, value, price: data.price })
                    );
                    setActive(true);
                  }
                }}
                className="relative mt-4 block bg-cyan-blue text-[#ffffff] shadow-lg w-[320px] h-[48px] rounded-lg hover:bg-[#000000] transition"
              >
                <img
                  className="absolute top-4 left-[88px] w-4"
                  src={Cart}
                  alt="cart"
                />
                Add to Cart
              </button>
              <SuccessMessage active={active} setActive={setActive} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPreview;
