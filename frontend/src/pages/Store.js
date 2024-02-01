import React, { useState } from 'react';
import Layout from './Layout';

// Components
import ProductGrid from '../components/product/ProductGrid';
import ProductFilter from '../components/product/ProductFilter';

const Store = () => {
  const [petType, setPetType] = useState('All');
  const [category, setCategory] = useState('All');
  return (
    <>
      <Layout>
        <div className="max-w-screen-xl mx-auto xl:flex mt-4">
          <ProductFilter
            petType={petType}
            setPetType={setPetType}
            category={category}
            setCategory={setCategory}
          />
          <div className="ml-4 grow">
            <ProductGrid category={category} petType={petType} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Store;
