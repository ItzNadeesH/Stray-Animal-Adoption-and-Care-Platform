import { useState, useEffect } from 'react';
import axios from 'axios';

export const useOrders = (id) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const fetchData = async () => {
      const res = await axios.get('/api/orders');

      if (res.status === 200) {
        setData(res.data);
        setIsLoading(false);
        setError(false);
      } else {
        setIsLoading(false);
        setError(res.data);
      }
    };
    fetchData();
  }, [id]);
  return { data, setData, isLoading, error };
};
