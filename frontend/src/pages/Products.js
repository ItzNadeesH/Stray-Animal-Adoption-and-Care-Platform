import React from 'react';
import ProductGrid from '../components/ProductGrid';
import ProductFilter from '../components/ProductFilter';

const Products = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto xl:flex">
        <ProductFilter />
        <ProductGrid />
      </div>
    </>
  );
};

export default Products;
