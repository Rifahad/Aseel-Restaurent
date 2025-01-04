import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Search from './pages/Search';
import Product from './pages/Product';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<HomePage />} />
        <Route path="/categorized" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path='/search' element={<Search/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
