import React from 'react';
import ProductItem from './ProductItem';

const ProductGrid = () => {
  return (
    <>
      <div className="mt-8 max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center border-t border-[#e6e6e6] mx-auto xl:mt-[78px]">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </>
  );
};

export default ProductGrid;
