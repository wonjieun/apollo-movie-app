import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

function App() {
  return (
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </Routes>
  );
}

export default App;
