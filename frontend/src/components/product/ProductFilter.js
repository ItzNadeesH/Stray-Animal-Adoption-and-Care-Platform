import React from 'react';
import Dropdown from '../common/Dropdown';

const ProductFilter = ({ petType, setPetType, category, setCategory }) => {
  const petTypes = ['All', 'Cat', 'Dog'];
  const productCategories = ['All', 'Food', 'Supplement', 'Accessories'];
  return (
    <>
      <div className="max-w-[300px] mx-auto md:w-[300px]">
        <p className="mb-3 text-[12px] text-[#767676]">Home / Store</p>
        <h2 className="mb-4 pb-3 text-[24px] border-b border-[#e6e6e6]">
          Products
        </h2>
        <div className="flex justify-between mb-4">
          <p className="mt-2 text-[14px]">Pet Type</p>
          <Dropdown
            items={petTypes}
            selectedProp={petType}
            setSelectedProp={setPetType}
          />
        </div>
        <div className="flex justify-between">
          <p className="mt-2 text-[14px]">Category</p>
          <Dropdown
            items={productCategories}
            selectedProp={category}
            setSelectedProp={setCategory}
          />
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
