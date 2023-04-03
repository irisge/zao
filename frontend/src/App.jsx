import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import HomeLayout from './layouts/HomeLayout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/panier" element={<MainLayout />}>
          <Route index element="" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
