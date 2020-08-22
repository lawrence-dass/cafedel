import React from 'react';
import StarRating from './StarRating';
import { formatDistance } from 'date-fns';

import Avatar from 'react-avatar';

const Reviews = ({ reviews }) => {
  return (
    <div className=" flex w-11/12 flex-wrap content-start rounded-lg p-3 m-auto">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-gray-200 flex p-4 rounded-md my-2 mx-3 mr- flex-grow w-2/5 items-center justify-center"
        >
          <Avatar name={review.name} round={true} size="70" />

          <div className="text-gray-900  card-header justify-content-between w-full pl-3 mb-3">
            <span className="text-lg pr-2 capitalize"> {review.name} </span>
            <span>
              <StarRating rating={review.rating} />
            </span>
            <p className="text-gray-700 text-sm"> {review.review} </p>
            <p className="text-right text-xs italic text-gray-600 self-end mb-0">
              {formatDistance(new Date(review.created_at), new Date())} ago...
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
