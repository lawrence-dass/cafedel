import styled from 'styled-components';

export const AddReviewContainer = styled.div.attrs({
  className: 'w-7/12 m-auto text-center',
})``;

export const AddReviewHeading = styled.h2.attrs({
  className: 'text-xl font-subHeading text-pink-900 mt-3 mb-4',
})``;

export const AddReviewBlock = styled.div.attrs({
  className: 'flex justify-around',
})``;

export const NameInputContainer = styled.div.attrs({
  className: 'flex col-8 w-3/5',
})``;

export const NameInput = styled.input.attrs({
  name: 'name',
  placeholder: 'Your Name',
  type: 'text',
  className:
    'shadow appearance-none bg-gray-100 border w-full h-10 rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
})``;

export const NameErrorMessage = styled.p.attrs({
  className: 'text-xs text-red-600  pb-1 text-center',
})``;

export const NameErrorPlaceHolder = styled.p.attrs({
  className: 'text-xs text-red-600 mb-1  mb-6',
})``;

export const RatingInputContainer = styled.div.attrs({
  className: 'form-group col-4 w-1/5',
})``;

export const RatingInput = styled.select.attrs({
  name: 'rating',
  className:
    'block appearance-none w-full bg-gray-100 text-gray-500 border border-gray-400 hover:border-gray-500 h-10 px-3 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline',
})``;

export const ReviewTextInput = styled.textarea.attrs({
  placeholder: 'Write review here...',
  name: 'reviewText',
  className:
    'form-control w-4/5 bg-gray-100 text-gray-700 border border-gray-400 hover:border-gray-500 rounded h-40 px-3 py-1 pr-8 mt-3 mb-3 focus:outline-none focus:shadow-outline',
})``;

export const ReviewTextErrorMessage = styled.p.attrs({
  className: 'text-xs text-red-600 pb-1 text-center',
})``;

export const ReviewTextErrorPlaceHolder = styled.p.attrs({
  className: 'text-xs text-red-600 mb-1 mb-6',
})``;

export const AddReviewButton = styled.button.attrs({
  type: 'submit',
  className:
    'mr-3 mb-10 text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded focus:outline-none focus:shadow-outline',
})``;
