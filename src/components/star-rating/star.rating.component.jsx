import React from 'react';

import { FullStar, HalfStar, EmptyStar } from './star-rating.style';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FullStar key={i} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<HalfStar key={i} />);
    } else {
      stars.push(<EmptyStar key={i} />);
    }
  }
  return <>{stars}</>;
};

export default StarRating;
