import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ShopService from '../apis/ShopService';

const UpdateShop = () => {
  const { id } = useParams();
  let history = useHistory();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await ShopService.get(`/${id}`);
      console.log(response.data.data);
      setName(response.data.data.shop.name);
      setLocation(response.data.data.shop.location);
      setPriceRange(response.data.data.shop.price_range);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedShop = await ShopService.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });
    console.log({ updatedShop });
    history.push('/');
  };

  return (
    <div className="">
      <h2 className="text-center text-5xl text-pink-900 mt-6 mb-4 font-subHeading">
        Update Shop Details
      </h2>
      <form class="m-auto w-3/12">
        <div className="flex items-center my-2 justify-around">
          <label className="text-lg text-gray-900 " htmlFor="name">
            Name:
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            className="w-10/12 ml-2 shadow appearance-none bg-gray-100 border h-10 rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className=" flex my-2 items-center justify-around ">
          <label className="text-lg text-gray-900" htmlFor="name">
            Location:
          </label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            id="location"
            className=" w-full ml-2 shadow appearance-none bg-gray-100 border h-10 rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
          />
        </div>
        <div className="flex my-2 items-center justify-around ">
          <label className="text-lg text-gray-900" htmlFor="price_range">
            Rating :
          </label>
          <input
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            type="number"
            id="price_range"
            className="w-9/12 ml-4 block appearance-none  bg-gray-100 text-gray-700 border border-gray-400 hover:border-gray-500 h-10 px-3 py-1 pr-6 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex">
          <button
            type="submit"
            onClick={handleSubmit}
            className=" m-auto mt-4 justify-around text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded focus:outline-none focus:shadow-outline"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateShop;
