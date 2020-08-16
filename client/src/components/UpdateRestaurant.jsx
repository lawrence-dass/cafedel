import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';

const UpdateRestaurant = () => {
  const { id } = useParams();
  let history = useHistory();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);
      console.log(response.data.data);
      setName(response.data.data.restaurant.name);
      setLocation(response.data.data.restaurant.location);
      setPriceRange(response.data.data.restaurant.price_range);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });
    console.log({ updatedRestaurant });
    history.push('/');
  };

  return (
    <div>
      <h1 className="text-center"> Update Restaurant</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name"> Name </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name"> Location </label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            id="location"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range"> Name </label>
          <input
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            type="number"
            id="price_range"
            className="form-control"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
