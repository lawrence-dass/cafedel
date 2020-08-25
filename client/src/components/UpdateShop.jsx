import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';

import ShopService from '../apis/ShopService';

const UpdateShop = () => {
  const { id } = useParams();
  let history = useHistory();

  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'onChange',
    defaultValues: {},
  });

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: {
          data: { shop },
        },
      } = await ShopService.get(`/${id}`);
      reset(shop);
    };
    fetchData();
  }, [id]);

  console.log(errors);

  const onSubmit = async ({ name, location, priceRange }, e) => {
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
      <form onSubmit={handleSubmit(onSubmit)} className="m-auto w-3/12">
        <div className="flex items-center my-1 justify-around">
          <label className="text-lg text-gray-900 " htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            ref={register({
              required: { value: true, message: 'Required field.' },
              minLength: { value: 6, message: 'Mininum 6 letters please.' },
              maxLength: { value: 20, message: 'Maximum 20 letters please.' },
            })}
            className="w-10/12  shadow appearance-none bg-gray-100 border h-10 rounded px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {errors?.name ? (
          <p className="text-xs text-red-600  pb-1 text-center">
            {errors?.name?.message}
          </p>
        ) : (
          <p className="text-xs text-red-600 mb-1  mb-6"></p>
        )}
        <div className=" flex  items-center justify-around ">
          <label className="text-lg text-gray-900" htmlFor="name">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            ref={register({
              required: { value: true, message: 'Required field.' },
              minLength: { value: 6, message: 'Mininum 6 letters please.' },
              maxLength: { value: 20, message: 'Maximum 20 letters please.' },
            })}
            className=" w-full ml-2 shadow appearance-none bg-gray-100 border h-10 rounded px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
          />
        </div>
        {errors?.location ? (
          <p className="text-xs text-red-600  pb-1 text-center">
            {errors?.location?.message}
          </p>
        ) : (
          <p className="text-xs text-red-600 mb-1  mb-6"></p>
        )}
        <div className="flex mb-5 items-center justify-around ">
          <label className="text-lg text-gray-900" htmlFor="price_range">
            Rating :
          </label>
          <select
            name="priceRange"
            ref={register({ required: true })}
            className="w-9/12 ml-4 block appearance-none  bg-gray-100 text-gray-700 border border-gray-400 hover:border-gray-500 h-10 px-3 py-1 pr-6 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option className="text-blue-200" disabled>
              Price Range
            </option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
        </div>
        <div className="flex">
          <button
            type="submit"
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
