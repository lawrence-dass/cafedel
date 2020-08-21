import React, { useState, useContext } from 'react';
import ShopService from '../apis/ShopService';
import { ShopsContext } from '../context/ShopContext';

const AddShop = () => {
  const { addShops } = useContext(ShopsContext);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('Price Range');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ShopService.post('/', {
        name,
        location,
        price_range: priceRange,
      });
      console.log(response);
      addShops(response.data.data.shop);
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <div className="w-10/12 m-auto">
      <form className="w-11/12">
        <div className="flex">
          <div className="flex-1 mr-3 ml-20">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              type="text"
              className="shadow appearance-none border w-full h-10 rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex-1 mr-3">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              type="text"
              className="shadow appearance-none border w-full h-10 rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex-1 mr-3">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="block appearance-none w-full bg-white text-gray-500 border border-gray-400 hover:border-gray-500 h-10 px-3 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option className="text-blue-200" disabled>
                Price Range
              </option>
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
            className=" mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white h-10 py-1 px-6 rounded focus:outline-none focus:shadow-outline"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddShop;
