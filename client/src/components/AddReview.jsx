import React, { useState } from 'react';
import ShopService from '../apis/ShopService';
import { useParams, useHistory, useLocation } from 'react-router-dom';

const AddReview = () => {
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState('Rating');

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      const response = await ShopService.post(`/${id}/addReview`, {
        name,
        review: reviewText,
        rating,
      });
      history.push('/');
      history.push(location.pathname);
      console.log(response);
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <div className="w-7/12 m-auto text-center">
      <h2 className="text-xl font-subHeading text-pink-900 mt-3 mb-4 ">
        Add more reviews here...
      </h2>
      <form>
        <div className="flex justify-around">
          <div className="flex col-8 w-3/5">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              type="text"
              className="shadow appearance-none bg-gray-100 border w-full h-10 rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="form-group col-4 w-1/5">
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="block appearance-none w-full bg-gray-100 text-gray-500 border border-gray-400 hover:border-gray-500 h-10 px-3 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option disab="true"> Rating </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div>
          <textarea
            value={reviewText}
            placeholder="Write review here..."
            onChange={(e) => setReviewText(e.target.value)}
            className="form-control w-4/5 bg-gray-100 text-gray-500 border border-gray-400 hover:border-gray-500 rounded h-40 px-3 py-1 pr-8 mt-3 mb-3 focus:outline-none focus:shadow-outline "
          ></textarea>
        </div>
        <button
          onClick={handleSubmitReview}
          type="submit"
          className="mr-3 mb-10 text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
