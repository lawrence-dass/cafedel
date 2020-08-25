import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './routes/home/home';
import ShopDetail from './routes/shop-detail/shop-detail';
import UpdatePage from './routes/update-page/update-page';
import { ShopsContextProvider } from './context/ShopContext';

const App = () => {
  return (
    <ShopsContextProvider>
      <div className="container mx-auto">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shops/:id" component={ShopDetail} />
            <Route exact path="/shops/:id/update" component={UpdatePage} />
          </Switch>
        </Router>
      </div>
    </ShopsContextProvider>
  );
};

export default App;
