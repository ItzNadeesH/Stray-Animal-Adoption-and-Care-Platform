import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

export const useReviews = (id) => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch reviews
  const fetchReviews = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.get(`/api/products/reviews/${id}`);
      if (res.status >= 200 && res.status < 300) {
        setReviews(res.data);
        setError(null);
      } else {
        setError(res);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  // Function to refetch reviews
  const refetchReviews = useCallback(() => {
    fetchReviews();
  }, [fetchReviews]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchReviews();
    };
    fetchData();
  }, [id, fetchReviews]);

  return { reviews, isLoading, error, refetchReviews };
};
