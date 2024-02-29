import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/homePage/Home';
import ProductDetails from '../pages/productDetails/ProductDetails';

import Tool from '../layout/toolbar/Index';
import MenuBar from '../layout/menubar/MenuBar';
import Footer from '../layout/footer/Footer';
import ProductsByCategoryContainer from '../containers/pages/ProductsByCategory';
import CartContainer from '../containers/pages/Cart';

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Tool/>
      <MenuBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product-detail' element={<ProductDetails />} />
          <Route path='/product-category' element={<ProductsByCategoryContainer />} />
          <Route path='/cart' element={<CartContainer />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}