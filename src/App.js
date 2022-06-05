import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import Movies from './routes/Movies';
import Detail from './routes/Detail';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Detail />} />
      </Routes>
    </main>
  );
}

export default App;
