import React from 'react';
import { Routes, Route } from 'react-router-dom'

import CatalogProducts from './component/catalogProducts/CatalogProducts';
import Cart from './component/cart/Cart';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Homepage */}
        <Route
          path='*'
          element={<CatalogProducts />}
        />

        {/* catalog product  */}
        <Route
          path='/products'
          element={<CatalogProducts />}
        />

        {/* shopping basket*/}
        <Route
          path='/cart'
          element={<Cart />}
        />
      </Routes>
    </div>
  );
}

export default App;
