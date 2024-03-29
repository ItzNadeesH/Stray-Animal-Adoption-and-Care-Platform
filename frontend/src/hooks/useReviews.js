import { useEffect, useState } from 'react';
import axios from 'axios';

export const useReviews = (id) => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const fetchData = async () => {
      setIsLoading(true);
      setError(false);

      const res = await axios.get('/api/products/reviews/' + id);
      if (res.status >= 200 && res.status < 300) {
        setReviews(res.data);
        setIsLoading(false);
        setError(false);
      } else {
        setIsLoading(false);
        setError(res);
      }
    };
    fetchData();
  }, [id]);

  return { reviews, setReviews, isLoading, error };
};
