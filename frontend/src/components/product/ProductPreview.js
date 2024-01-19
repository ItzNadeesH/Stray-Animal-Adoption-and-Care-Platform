import React from 'react';
import bokdok from '../../assets/bok-dok.jpg';
import Cart from '../../assets/icons/icon-cart.svg';
import Counter from '../common/Counter';

const ProductPreview = () => {
  return (
    <>
      <div className="flex flex-wrap max-w-screen-xl mx-auto justify-around mt-4">
        <div className="max-w-[400px]">
          <img className="md:rounded-2xl" src={bokdok} alt="bokdok" />
        </div>
        <div className="px-5 py-6 md:max-w-[500px]">
          <p className="uppercase text-[14px] font-medium">Company name</p>
          <h1 className="mb-4 text-[36px] text-cyan-blue">Bok Dok</h1>
          <p className="mb-6 text-[#767676] text-[14px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            voluptatem aliquam ut dolorum quibusdam assumenda maxime numquam
            sapiente beatae sint?
          </p>
          <h2 className="mb-4 text-[24px] tracking-wide">1200LKR</h2>
          <Counter />
          <div className="relative">
            <button className="mt-4 mx-auto block bg-cyan-blue text-[#ffffff] shadow-lg w-[320px] h-[48px] rounded-lg hover:bg-[#000000] transition">
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
    </>
  );
};

export default ProductPreview;
