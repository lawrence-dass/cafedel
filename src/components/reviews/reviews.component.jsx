import React from 'react';
import { formatDistance } from 'date-fns';
import Avatar from 'react-avatar';

import {
  ReviewsContainer,
  Review,
  ReviewerNameContainer,
  ReviewerName,
  ReviewText,
  ReviewTime,
} from './review.style';
import StarRating from './../star-rating/star.rating.component';

const Reviews = ({ reviews }) => {
  return (
    <ReviewsContainer>
      {reviews.map((review) => (
        <Review key={review.id}>
          <Avatar name={review.name} round={true} size="70" />
          <ReviewerNameContainer>
            <ReviewerName> {review.name} </ReviewerName>
            <span>
              <StarRating rating={review.rating} />
            </span>
            <ReviewText> {review.review} </ReviewText>
            <ReviewTime>
              {formatDistance(new Date(review.created_at), new Date())} ago...
            </ReviewTime>
          </ReviewerNameContainer>
        </Review>
      ))}
    </ReviewsContainer>
  );
};

export default Reviews;
