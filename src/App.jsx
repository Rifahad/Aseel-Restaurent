import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<HomePage />} />
        <Route path="/categorized" element={<HomePage />} />
        <Route path="/product" element={<HomePage />} />
        <Route path='/search' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
