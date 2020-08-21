import React from 'react';
// import Header from '../components/Header';
import AddShop from '../components/AddShop';
import ShopsList from '../components/shop-list/shop-list.component';

import Header from '../components/header/header.components';

const Home = () => {
  return (
    <div>
      <Header />
      <AddShop />
      <ShopsList />
    </div>
  );
};

export default Home;
