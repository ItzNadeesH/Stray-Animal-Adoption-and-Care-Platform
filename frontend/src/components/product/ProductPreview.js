import Cart from '../../assets/icons/icon-cart.svg';
import { useProduct } from '../../hooks/useProduct';
import Counter from '../common/Counter';
import { useParams } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

const ProductPreview = () => {
  const { productId } = useParams();
  const { data } = useProduct(productId);

  const springs = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <>
      {data && (
        <animated.div
          style={{
            ...springs,
          }}
        >
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
                {data.price}.00LKR
              </h2>
              <Counter />
              <div className="relative">
                <button className="mt-4 ml-2 mx-auto block bg-cyan-blue text-[#ffffff] shadow-lg w-[320px] h-[48px] rounded-lg hover:bg-[#000000] transition">
                  Add to Cart
                </button>
                <img
                  className="absolute top-4 left-[100px] w-4"
                  src={Cart}
                  alt="cart"
                />
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </>
  );
};

export default ProductPreview;
