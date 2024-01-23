import { useEffect, useState } from 'react';
import axios from 'axios';

export const useProducts = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const fetchData = async () => {
      setIsLoading(true);
      setError(false);
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.get('/api/products', config);
      if (res.status >= 200 && res.status < 300) {
        setData(res.data);
        setIsLoading(false);
        setError(false);
      } else {
        setIsLoading(false);
        setError(res);
      }
    };
    fetchData();
  }, []);

  return { data, isLoading, error };
};
