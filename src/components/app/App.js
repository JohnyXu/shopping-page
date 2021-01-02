import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import configureStore from '../../redux/configureStore';
import { createBrowserHistory } from 'history';

import Header from '../header';
import Home from '../home';
import ProductPage from '../product-page';
import CheckoutPage from '../checkout';

const store = configureStore();
const history = createBrowserHistory();

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history} basename={'/'}>
        <div>
          <Header />
          <Switch>
            <Route exact path={`/`} component={Home} />
            <Route exact path={`/product/:id`} component={ProductPage} />
            <Route exact path={`/checkout`} component={CheckoutPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
