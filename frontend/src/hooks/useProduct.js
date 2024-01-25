import { useEffect, useState } from 'react';
import axios from 'axios';

export const useProduct = (id) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const fetchData = async () => {
      setIsLoading(true);
      setError(false);

      const res = await axios.get('/api/products/' + id);
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
  }, [id]);

  return { data, setData, isLoading, error };
};
