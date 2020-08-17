import React, { useState, useContext } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantContext';

const AddRestaurant = () => {
  const { addRestaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('Price Range');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post('/', {
        name,
        location,
        price_range: priceRange,
      });
      console.log(response);
      addRestaurants(response.data.data.restaurant);
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <div className="mb-4">
      <form>
        <div className="form-row">
          <div className="col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="col">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              type="text"
              className="form-control"
            />
          </div>
          <div className="col">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="custom-select mr-sm-2"
            >
              <option disabled> Price Range </option>
              <option value="1"> $ </option>
              <option value="2"> $$ </option>
              <option value="3"> $$$ </option>
              <option value="4"> $$$$ </option>
              <option value="5"> $$$$$ </option>
            </select>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
