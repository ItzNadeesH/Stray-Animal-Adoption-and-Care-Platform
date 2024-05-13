import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ReviewForm = ({ productId, updateReviews }) => {
  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hoverStar, setHoverStar] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      return navigate('/login');
    }
    if (rating !== 0 && comment !== '') {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify({
        rating,
        comment,
      });
      await axios.post('/api/products/review/' + productId, body, config);

      setRating(0);
      setComment('');
      updateReviews();
    }
  };

  return (
    <>
      <form className="p-[56px] pb-2" onSubmit={handleSubmit}>
        <div className="flex justify-between mb-5">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-900"
          >
            Your review
          </label>
          <div className="flex items-center mb-1 ml-auto space-x-1 rtl:space-x-reverse">
            {[1, 2, 3, 4, 5].map((index) => (
              <svg
                key={index}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHoverStar(index)}
                onMouseLeave={() => setHoverStar(rating)}
                className={`w-4 h-4 cursor-pointer ${
                  hoverStar >= index ? 'text-yellow-300' : 'text-gray-300'
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  className={`hover:text-yellow-300`}
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
            ))}
          </div>
        </div>

        <textarea
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-0"
          placeholder="Leave a comment..."
        ></textarea>
        <button className="mt-3 h-8 px-4 text-[12px] text-white bg-cyan-blue rounded-md hover:bg-black transition-all">
          Add Review
        </button>
      </form>
    </>
  );
};

export default ReviewForm;
