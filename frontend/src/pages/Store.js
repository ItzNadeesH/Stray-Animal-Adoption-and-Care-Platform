import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilter from '../components/product/ProductFilter';
import Layout from './Layout';

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);
  if (isLoading) return <LoadingScreen />;
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
