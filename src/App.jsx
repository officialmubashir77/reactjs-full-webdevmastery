import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/MovieZone/Movie';
import Navbar from './components/Navbar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
    <Navbar onSearch={handleSearch} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Movie searchQuery={searchQuery} />} />
    </Routes>
    </>
  );
};

export default App;
