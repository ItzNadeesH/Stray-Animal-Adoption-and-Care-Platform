import { useEffect, useState } from 'react';
import axios from 'axios';

export const useUsers = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const fetchData = async () => {
      setIsLoading(true);
      setError(false);

      const res = await axios.get('/api/users');
      if (res.status === 200) {
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

  return { data, setData, isLoading, error };
};
