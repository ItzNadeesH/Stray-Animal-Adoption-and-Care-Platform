import React from 'react';
import ProductItem from './ProductItem';

const ProductGrid = () => {
  return (
    <>
      <div className="max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </>
  );
};

export default ProductGrid;
