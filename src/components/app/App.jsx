import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import configureStore from '../../redux/configureStore';

import Header from '../header';
import Home from '../home';
import ProductPage from '../product-page';
import CheckoutPage from '../checkout';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}
