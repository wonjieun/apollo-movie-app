import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Movies from './routes/Movies';
import Detail from './routes/Detail';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
