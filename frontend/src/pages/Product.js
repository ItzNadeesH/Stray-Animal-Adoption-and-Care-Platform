import ProductPreview from '../components/product/ProductPreview';
import Layout from './Layout';
import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

const Product = () => {
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
        <ProductPreview />
      </Layout>
    </>
  );
};

export default Product;
