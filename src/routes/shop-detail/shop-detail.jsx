import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ShopsContext } from './../../context/ShopContext';
import ShopService from './../../apis/ShopService';
import Reviews from './../../components/reviews/reviews.component';
import AddReview from './../../components/add-review/add-review.component';
import StarRating from './../../components/star-rating/star.rating.component';
import SecondaryHeader from './../../components/secondary-header/secondary-header';
import {
  ShopName,
  StarRatingContainer,
  ReviewCount,
  NoReviewMessage,
  NoReviewMessageContainer,
  ReviewsContianer,
} from './shop-detail.style';

const ShopDetail = () => {
  const { id } = useParams();
  const { selectedShop, setSelectedShop } = useContext(ShopsContext);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await ShopService.get(`/${id}`);
        setSelectedShop(response.data.data);
      };
      fetchData();
    } catch (err) {
      console.log({ err });
    }
  }, [setSelectedShop, id]);

  return (
    <div>
      {selectedShop && (
        <>
          <SecondaryHeader />
          <ShopName>{selectedShop.shop.name}</ShopName>
          <StarRatingContainer>
            <StarRating rating={selectedShop.shop.average_rating} />
            <ReviewCount>
              {selectedShop.shop.count ? `(${selectedShop.shop.count})` : '(0)'}
            </ReviewCount>
          </StarRatingContainer>
          <NoReviewMessageContainer>
            {!selectedShop.shop.count && (
              <NoReviewMessage>
                No Reviews, go ahead post some of your coffee experience!'
              </NoReviewMessage>
            )}
          </NoReviewMessageContainer>
          {selectedShop.shop.count === 0 && <h1> No Reviews yet </h1>}
          <ReviewsContianer>
            <Reviews reviews={selectedShop.reviews} />
            <AddReview />
          </ReviewsContianer>
        </>
      )}
    </div>
  );
};

export default ShopDetail;
