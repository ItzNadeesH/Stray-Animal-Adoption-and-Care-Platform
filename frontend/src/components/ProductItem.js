import React from 'react';
import bokdok from '../assets/bok-dok.jpg';

const ProductItem = () => {
  return (
    <>
      <div className="m-4 px-6 py-4 max-w-[270px] border border-solid border-[#e6e6e6] shadow-lg rounded-md">
        <img className="w-[150px] mx-auto" src={bokdok} alt="Product-item" />
        <p>Bok dok</p>
        <p className="text-[12px] text-[#8d8d8d] mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
        </p>

        <hr className="my-2 border-solid border-[#e6e6e6]" />
        <div className="flex justify-between align-center">
          <button className="px-4 py-1 text-[14px] text-[#ffffff] bg-cyan-blue hover:bg-[#000000] transition rounded-full">
            View Product
          </button>
          <p className="mt-0.5">11300LKR</p>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
