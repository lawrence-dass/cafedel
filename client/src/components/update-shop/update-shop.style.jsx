import styled from 'styled-components';

export const UpdateShopHeading = styled.h1.attrs({
  className: 'text-center text-5xl text-pink-900 mt-6 mb-4 font-subHeading',
})``;

export const UpdateShopForm = styled.form.attrs({
  className: 'm-auto w-3/12',
})``;

export const UpdateShopNameContainer = styled.div.attrs({
  className: 'flex items-center my-1 justify-around',
})``;

export const UpdateShopNameLabel = styled.label.attrs({
  className: 'text-lg text-gray-900',
  htmlFor: 'name',
})``;

export const UpdateLocationInputContainer = styled.div.attrs({
  className: 'flex  items-center justify-around',
})``;

export const UpdateLocationLabel = styled.label.attrs({
  className: 'text-lg text-gray-900',
  htmlFor: 'name',
})``;

export const UpdateShopNameInput = styled.input.attrs({
  className:
    'w-10/12  shadow appearance-none bg-gray-100 border h-10 rounded px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
  type: 'text',
  id: 'name',
  name: 'name',
})``;

export const NameErrorMessage = styled.p.attrs({
  className: 'text-xs text-red-600 pb-1 text-center',
})``;

export const NameErrorPlaceHolder = styled.p.attrs({
  className: 'text-xs text-red-600 mb-1 mb-6',
})``;

export const UpdateShopLocationContainer = styled.div.attrs({
  className: 'flex-1 mr-3',
})``;

export const UpdateShopLocationInput = styled.input.attrs({
  type: 'text',
  id: 'location',
  name: 'location',
  className:
    'w-full ml-2 shadow appearance-none bg-gray-100 border h-10 rounded px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
})``;

export const LocationErrorMessage = styled.p.attrs({
  className: 'text-xs text-red-600  pb-1 text-center',
})``;

export const LocationErrorPlaceHolder = styled.p.attrs({
  className: 'text-xs text-red-600 mb-1  mb-6',
})``;

export const UpdatePriceRangeContainer = styled.div.attrs({
  className: 'flex mb-5 items-center justify-around',
})``;

export const UpdatePriceRangeLabel = styled.label.attrs({
  className: 'text-lg text-gray-900',
  htmlFor: 'price_range',
})``;

export const UpdatePriceRangeInput = styled.select.attrs({
  className:
    'w-9/12 ml-4 block appearance-none  bg-gray-100 text-gray-700 border border-gray-400 hover:border-gray-500 h-10 px-3 py-1 pr-6 rounded shadow leading-tight focus:outline-none focus:shadow-outline',
  name: 'priceRange',
})``;

export const PriceRangeDefaultOption = styled.option.attrs({
  className: 'text-blue-200',
})``;

export const UpdateShopButtonContainer = styled.div.attrs({
  className: 'flex',
})``;

export const UpdateShopButton = styled.button.attrs({
  type: 'submit',
  className:
    'm-auto mt-4 justify-around text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded focus:outline-none focus:shadow-outline',
})``;
