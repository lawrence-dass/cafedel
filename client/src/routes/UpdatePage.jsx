import React from 'react';
import { ReactComponent as CoffeeIcon } from '../assets/drink.svg';

import UpdateShop from '../components/UpdateShop';

const UpdatePage = () => {
  return (
    <div>
      <CoffeeIcon style={{ width: '70px', height: '70px' }} />
      <UpdateShop />
    </div>
  );
};

export default UpdatePage;
