import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './routes/Home';
import ShopDetail from './routes/ShopDetail';
import UpdatePage from './routes/UpdatePage';
import { ShopsContextProvider } from './context/ShopContext';
import Footer from './components/footer/footer.component';

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
          <Footer />
        </Router>
      </div>
    </ShopsContextProvider>
  );
};

export default App;
