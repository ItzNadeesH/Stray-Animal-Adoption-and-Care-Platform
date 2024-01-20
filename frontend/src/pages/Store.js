import React from 'react';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilter from '../components/product/ProductFilter';
import Layout from './Layout';

const Products = () => {
  return (
    <>
      <Layout>
        <div className="max-w-screen-xl mx-auto xl:flex">
          <ProductFilter />
          <ProductGrid />
        </div>
      </Layout>
    </>
  );
};

export default Products;
