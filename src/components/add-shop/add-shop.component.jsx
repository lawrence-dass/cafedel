import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import ShopService from './../../apis/ShopService';
import { ShopsContext } from './../../context/ShopContext';
import {
  AddShopContainer,
  AddShopForm,
  AddShopNameContainer,
  AddShopNameInput,
  NameErrorMessage,
  NameErrorPlaceHolder,
  AddShopLocationContainer,
  AddShopLocationInput,
  LocationErrorMessage,
  LocationErrorPlaceHolder,
  PriceRangeContainer,
  PriceRangeInput,
  PriceRangeDefaultOption,
  AddShopButton,
} from './add-shop.style';

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
      addShops(response.data.data.shop);
      MySwal.fire(
        'Shop added Successfully!',
        'Thank you for your contribution 🙏',
        'success'
      );

      e.target.reset();
    } catch (err) {
      MySwal.fire(
        'Something went wrong with your request',
        'Please check your input and add details again 🙏',
        'error'
      );
    }
  };

  const InputNameError = () => {
    return errors?.name ? (
      <NameErrorMessage>{errors?.name?.message}</NameErrorMessage>
    ) : (
      <NameErrorPlaceHolder />
    );
  };

  const InputLocationError = () => {
    return errors?.location ? (
      <LocationErrorMessage>{errors?.location?.message}</LocationErrorMessage>
    ) : (
      <LocationErrorPlaceHolder />
    );
  };

  return (
    <AddShopContainer>
      <AddShopForm onSubmit={handleSubmit(onSubmit)}>
        <AddShopNameContainer>
          <AddShopNameInput
            ref={register({
              required: { value: true, message: 'Required field.' },
              minLength: { value: 6, message: 'Mininum 6 letters please.' },
              maxLength: { value: 20, message: 'Maximum 20 letters please.' },
            })}
          />
          <InputNameError />
        </AddShopNameContainer>
        <AddShopLocationContainer>
          <AddShopLocationInput
            ref={register({
              required: { value: true, message: 'Required field.' },
              minLength: { value: 6, message: 'Mininum 6 letters please.' },
              maxLength: { value: 30, message: 'Maximum 30 letters please.' },
            })}
          />
          <InputLocationError />
        </AddShopLocationContainer>
        <PriceRangeContainer>
          <PriceRangeInput ref={register({ required: true })}>
            <PriceRangeDefaultOption disabled>
              Price Range
            </PriceRangeDefaultOption>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </PriceRangeInput>
        </PriceRangeContainer>
        <AddShopButton>Add</AddShopButton>
      </AddShopForm>
    </AddShopContainer>
  );
};

export default AddShop;
