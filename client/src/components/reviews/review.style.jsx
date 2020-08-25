import styled from 'styled-components';

export const ReviewsContainer = styled.div.attrs({
  className: 'flex w-11/12 flex-wrap content-start rounded-lg p-3 m-auto',
})``;

export const Review = styled.div.attrs({
  className:
    'bg-gray-200 flex p-4 rounded-md my-2 mx-3 mr- flex-grow w-2/5 items-center justify-center',
})``;

export const ReviewerNameContainer = styled.div.attrs({
  className:
    'text-gray-900  card-header justify-content-between w-full pl-3 mb-3',
})``;

export const ReviewerName = styled.span.attrs({
  className: 'text-lg pr-2 capitalize',
})``;

export const ReviewText = styled.p.attrs({
  className: 'text-gray-700 text-sm',
})``;

export const ReviewTime = styled.p.attrs({
  className: 'text-right text-xs italic text-gray-600 self-end mb-0',
})``;
