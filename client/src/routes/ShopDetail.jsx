import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopsContext } from '../context/ShopContext';
import ShopService from '../apis/ShopService';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';
import StarRating from '../components/star-rating/star.rating.component';

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
          <h1 className="text-pink-900 pt-1 font-heading text-center text-8xl">
            {selectedShop.shop.name}
          </h1>
          <div className="text-center">
            <StarRating rating={selectedShop.shop.average_rating} />
            <span className="text-warning ml-1 text-sm text-gray-900">
              {selectedShop.shop.count ? `(${selectedShop.shop.count})` : '(0)'}
            </span>
          </div>
          <h1 className="text-pink-800 mb-3 font-subHeading text-center text-3xl">
            {!selectedShop.shop.count && (
              <p className="h-40 mt-30">
                No Reviews, go ahead post some of your coffee experience!'
              </p>
            )}
          </h1>
          {selectedShop.shop.count === 0 && <h1> No Reviews yet </h1>}
          <div className="mt-3">
            <Reviews reviews={selectedShop.reviews} />

            <AddReview />
          </div>
        </>
      )}
    </div>
  );
};

export default ShopDetail;
