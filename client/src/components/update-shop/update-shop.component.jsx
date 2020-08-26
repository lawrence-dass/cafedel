import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';

import ShopService from './../../apis/ShopService';
import {
  UpdateShopHeading,
  UpdateShopForm,
  UpdateShopNameContainer,
  UpdateShopNameInput,
  NameErrorMessage,
  NameErrorPlaceHolder,
  UpdateShopNameLabel,
  UpdateLocationInputContainer,
  UpdateLocationLabel,
  UpdateShopLocationInput,
  LocationErrorMessage,
  LocationErrorPlaceHolder,
  UpdatePriceRangeContainer,
  UpdatePriceRangeLabel,
  UpdatePriceRangeInput,
  PriceRangeDefaultOption,
  UpdateShopButtonContainer,
  UpdateShopButton,
} from './update-shop.style';

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
  }, [id, reset]);

  const onSubmit = async ({ name, location, priceRange }, e) => {
    e.preventDefault();
    await ShopService.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });
    history.push('/');
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
    <>
      <UpdateShopHeading>Update Shop Details</UpdateShopHeading>
      <UpdateShopForm onSubmit={handleSubmit(onSubmit)}>
        <UpdateShopNameContainer>
          <UpdateShopNameLabel>Name:</UpdateShopNameLabel>
          <UpdateShopNameInput
            ref={register({
              required: { value: true, message: 'Required field.' },
              minLength: { value: 6, message: 'Mininum 6 letters please.' },
              maxLength: { value: 20, message: 'Maximum 20 letters please.' },
            })}
          />
        </UpdateShopNameContainer>
        <InputNameError />
        <UpdateLocationInputContainer>
          <UpdateLocationLabel>Location:</UpdateLocationLabel>
          <UpdateShopLocationInput
            ref={register({
              required: { value: true, message: 'Required field.' },
              minLength: { value: 6, message: 'Mininum 6 letters please.' },
              maxLength: { value: 20, message: 'Maximum 20 letters please.' },
            })}
          />
        </UpdateLocationInputContainer>
        <InputLocationError />
        <UpdatePriceRangeContainer>
          <UpdatePriceRangeLabel>Rating :</UpdatePriceRangeLabel>
          <UpdatePriceRangeInput ref={register({ required: true })}>
            <PriceRangeDefaultOption disabled>
              Price Range
            </PriceRangeDefaultOption>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </UpdatePriceRangeInput>
        </UpdatePriceRangeContainer>
        <UpdateShopButtonContainer>
          <UpdateShopButton>Update</UpdateShopButton>
        </UpdateShopButtonContainer>
      </UpdateShopForm>
    </>
  );
};

export default UpdateShop;
