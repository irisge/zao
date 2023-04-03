import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import HomeLayout from './layouts/HomeLayout';
import Catalogue from './pages/Catalogue';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalogue" element={<Catalogue nav="Shop" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
