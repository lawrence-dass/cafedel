import styled from 'styled-components';

export const ShopListContainer = styled.div.attrs({
  className: 'px-3 py-4 flex justify-center',
})``;

export const ShopTable = styled.table.attrs({
  className: 'w-full text-md bg-white shadow-md rounded mb-4',
})``;

export const ShopHead = styled.thead.attrs({
  className: 'bg-indigo-700 px-3 py-14 text-gray-200',
})``;

export const ShopHeadRow = styled.tr.attrs({
  className: 'px-3 py-14 bg-primary',
})``;

export const ShopHeadTitle = styled.th.attrs({
  className: 'p-3',
  scope: 'col',
})``;

export const ShopTableBody = styled.tbody.attrs({
  className: 'text-center',
})``;

export const ShopBodyRow = styled.tr.attrs({
  className:
    'bg-gray-800 text-gray-300 border-b border-gray-700 cursor-pointer capitalize',
})``;

export const ShopBodyTableDataWithButton = styled.td.attrs({
  className: 'p-3 px-5',
})``;

export const UpdateButton = styled.button.attrs({
  className:
    'mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline',
})``;

export const DeleteButton = styled.button.attrs({
  className:
    'text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline',
})``;

export const NoReviewText = styled.span.attrs({
  className: 'text-warning',
})``;

export const ReviewCount = styled.span.attrs({
  className: 'text-base pl-1',
})``;
