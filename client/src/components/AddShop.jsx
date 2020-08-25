import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import ShopService from '../apis/ShopService';
import { ShopsContext } from '../context/ShopContext';

const MySwal = withReactContent(Swal);

const AddShop = () => {
  const { addShops } = useContext(ShopsContext);

  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async ({ name, location, priceRange }, e) => {
    try {
      const response = await ShopService.post('/', {
        name,
        location,
        price_range: priceRange,
      });
      console.log(response);
      addShops(response.data.data.shop);
      MySwal.fire(
        'Shop added Successfully!',
        'Thank you for your contribution 🙏',
        'success'
      );

      e.target.reset();
    } catch (err) {
      console.log({ err });
      MySwal.fire(
        'Something went wrong with your request',
        'Please check your input and add details again 🙏',
        'error'
      );
    }
  };

  return (
    <div className="w-10/12 m-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="w-11/12">
        <div className="flex">
          <div className="flex-1 mr-3 ml-20">
            <input
              type="text"
              placeholder="Name"
              name="name"
              ref={register({
                required: { value: true, message: 'Required field.' },
                minLength: { value: 6, message: 'Mininum 6 letters please.' },
                maxLength: { value: 20, message: 'Maximum 20 letters please.' },
              })}
              className="shadow appearance-none border w-full h-10 rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors?.name ? (
              <p className="text-xs text-red-600  pt-2 ml-2">
                {errors?.name?.message}
              </p>
            ) : (
              <p className="text-xs text-red-600 p-1 mt-1 mb-1 ml-2 h-4"></p>
            )}
          </div>
          <div className="flex-1 mr-3">
            <input
              name="location"
              ref={register({
                required: { value: true, message: 'Required field.' },
                minLength: { value: 6, message: 'Mininum 6 letters please.' },
                maxLength: { value: 20, message: 'Maximum 20 letters please.' },
              })}
              placeholder="Location"
              type="text"
              className="shadow appearance-none border w-full h-10 rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors?.location ? (
              <p className="text-xs text-red-600  pt-2 ml-2">
                {errors?.location?.message}
              </p>
            ) : (
              <p className="text-xs text-red-600 p-1 mt-1 mb-1 ml-2 h-4"></p>
            )}
          </div>
          <div className="flex-1 mr-3">
            <select
              name="priceRange"
              ref={register({ required: true })}
              className="block appearance-none w-full bg-white text-gray-500 border border-gray-400 hover:border-gray-500 h-10 px-3 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
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
