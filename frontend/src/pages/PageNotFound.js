import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const PageNotFound = () => {
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
        <div className="max-w-screen-xl mx-auto mt-[140px] px-5">
          <h1 className="mx-auto mt-[100px] text-black max-w-[600px] text-center text-[24px] sm:text-[42px] border-b border-[#e6e6e6] pb-6">
            Oops, It Looks like you’ve wandered into the wrong field.
          </h1>
          <p className="mt-5 text-[14px] text-center">
            Sorry! We can’t find the content you’re looking for. Try to search
            again or go back to{' '}
            <Link to="/" className="text-cyan-blue font-medium cursor-pointer">
              HomePage
            </Link>
          </p>
        </div>
      </Layout>
    </>
  );
};

export default PageNotFound;
