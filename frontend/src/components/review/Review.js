import React, { useState } from 'react';
import { format } from 'date-fns';
import avatar from '../../assets/icons/avatar.jpg';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Review = ({ data, updateReviews }) => {
  const [editMode, setEditMode] = useState(false);
  const { productId } = useParams();
  const user = useSelector((state) => state.userAuth.user);
  const formattedDate = format(new Date(data.date), 'MMMM d, yyyy');

  const handleDelete = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        reviewId: data._id,
      },
    };
    await axios.delete('/api/products/review/' + productId, config);
    updateReviews();
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  return (
    <>
      <article>
        <div className="flex items-center mt-5">
          <img
            className="w-10 h-10 me-4 rounded-full"
            src={avatar}
            alt="avatar"
          />
          <div className="font-medium">
            <p className="text-[14px]">
              {data.name}
              <time className="block text-[12px] text-gray-500">
                {formattedDate}
              </time>
            </p>
          </div>
          <div className="flex items-center mb-1 ml-auto space-x-1 rtl:space-x-reverse">
            <svg
              className={`w-4 h-4 ${
                data.rating >= 1 ? 'text-yellow-300' : 'text-gray-300'
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className={`w-4 h-4 ${
                data.rating >= 2 ? 'text-yellow-300' : 'text-gray-300'
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className={`w-4 h-4 ${
                data.rating >= 3 ? 'text-yellow-300' : 'text-gray-300'
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className={`w-4 h-4 ${
                data.rating >= 4 ? 'text-yellow-300' : 'text-gray-300'
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className={`w-4 h-4 ${
                data.rating >= 5 ? 'text-yellow-300' : 'text-gray-300'
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
        </div>
        {user !== null && user._id === data.user && (
          <div className="pl-[56px]">
            <button className="font-thin text-[12px] mr-5" onClick={handleEdit}>
              Edit
            </button>
            <button className="font-thin text-[12px]" onClick={handleDelete}>
              Delete
            </button>
          </div>
        )}
        <p className="mb-2 pl-[56px] text-[14px]">{data.comment}</p>
        <div className={!editMode && `hidden`}>
          <textarea
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-0 ml-[56px] max-w-[928px]"
            value={data.comment}
          ></textarea>
          <button className="mt-3 h-8 px-4 text-[12px] text-white bg-cyan-blue rounded-md hover:bg-black transition-all ml-[56px]">
            Update Review
          </button>
        </div>
      </article>
    </>
  );
};

export default Review;
