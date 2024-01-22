import React, { useState, useEffect } from 'react';
import LoadingScreen from '../pages/LoadingScreen';

const Loader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setIsLoading(false);
      } catch (error) {
        console.error('Error while fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return isLoading ? <LoadingScreen /> : children;
};

export default Loader;
