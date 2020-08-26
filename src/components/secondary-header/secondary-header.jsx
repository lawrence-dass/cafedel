import React from 'react';

import { ReactComponent as CoffeeIcon } from '../../assets/drink.svg';

import { Title } from './secondary-header.style';

const SecondaryHeader = () => {
  return (
    <div>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <CoffeeIcon style={{ width: '50px', height: '50px' }} />
        <Title>Cafedel</Title>
      </div>
    </div>
  );
};

export default SecondaryHeader;
