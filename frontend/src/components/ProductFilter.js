import React from 'react';
import Dropdown from './Dropdown';

const ProductFilter = () => {
  const petTypes = ['Cat', 'Dog'];
  const productCategories = ['Food', 'Supplement', 'Accessories'];
  return (
    <>
      <div className="max-w-[300px] mx-auto">
        <p className="mb-6 text-[12px] text-[#767676]">Home / Shop</p>
        <h2 className="mb-4 text-[24px] border-b border-[#e6e6e6]">Products</h2>
        <div className="flex justify-between mb-4">
          <p className="mt-2 text-[14px]">Pet Type</p>
          <Dropdown items={petTypes} />
        </div>
        <div className="flex justify-between pb-4 border-b border-[#e6e6e6]">
          <p className="mt-2 text-[14px]">Category</p>
          <Dropdown items={productCategories} />
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
