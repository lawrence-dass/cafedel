import React from 'react';

import { ReactComponent as CoffeeIcon } from '../../assets/drink.svg';

import { Title, SubTitle } from './header.style';

const Header = () => {
  return (
    <div>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <CoffeeIcon style={{ width: '70px', height: '70px' }} />
        <Title>Cafedel</Title>
      </div>
      <SubTitle>Best of coffee spots in Delhi</SubTitle>
    </div>
  );
};

export default Header;
