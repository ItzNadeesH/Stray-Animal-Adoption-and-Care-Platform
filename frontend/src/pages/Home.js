import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import LoadingScreen from './LoadingScreen';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);
  if (isLoading) return <LoadingScreen />;
  return (
    <>
      <Layout></Layout>
    </>
  );
};

export default Home;
