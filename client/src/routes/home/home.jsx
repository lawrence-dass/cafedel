import React from 'react';

import AddShop from './../../components/add-shop/add-shop.component';
import ShopsList from './../../components/shop-list/shop-list.component';
import Header from './../../components/header/header.components';
import Footer from './../../components/footer/footer.component';

const Home = () => {
  return (
    <div>
      <Header />
      <AddShop />
      <ShopsList />
      <Footer />
    </div>
  );
};

export default Home;
