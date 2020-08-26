import styled from 'styled-components';

export const AddShopContainer = styled.div.attrs({
  className: 'w-10/12 m-auto',
})``;

export const AddShopForm = styled.form.attrs({
  className: 'w-11/12 flex',
})``;

export const AddShopNameContainer = styled.div.attrs({
  className: 'flex-1 mr-3 ml-20',
})``;

export const AddShopNameInput = styled.input.attrs({
  className:
    'shadow appearance-none border w-full h-10 rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
  type: 'text',
  placeholder: 'Name',
  name: 'name',
})``;

export const NameErrorMessage = styled.p.attrs({
  className: 'text-xs text-red-600  pt-2 ml-2',
})``;

export const NameErrorPlaceHolder = styled.p.attrs({
  className: 'text-xs text-red-600 p-1 mt-1 mb-1 ml-2 h-4',
})``;

export const AddShopLocationContainer = styled.div.attrs({
  className: 'flex-1 mr-3',
})``;

export const AddShopLocationInput = styled.input.attrs({
  name: 'location',
  placeholder: 'Location',
  type: 'text',
  className:
    'shadow appearance-none border w-full h-10 rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
})``;

export const LocationErrorMessage = styled.p.attrs({
  className: 'text-xs text-red-600  pt-2 ml-2',
})``;

export const LocationErrorPlaceHolder = styled.p.attrs({
  className: 'text-xs text-red-600 p-1 mt-1 mb-1 ml-2 h-4',
})``;

export const PriceRangeContainer = styled.div.attrs({
  className: 'flex-1 mr-3',
})``;

export const PriceRangeInput = styled.select.attrs({
  className:
    'block appearance-none w-full bg-white text-gray-500 border border-gray-400 hover:border-gray-500 h-10 px-3 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline',
  name: 'priceRange',
})``;

export const PriceRangeDefaultOption = styled.option.attrs({
  className: 'text-blue-200',
})``;

export const AddShopButton = styled.button.attrs({
  type: 'submit',
  className:
    ' mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white h-10 py-1 px-6 rounded focus:outline-none focus:shadow-outline',
})``;
